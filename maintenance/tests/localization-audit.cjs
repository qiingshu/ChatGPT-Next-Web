// Static source audit. Run only in GitHub's temporary hosted environment.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
assert.equal(process.env.GITHUB_ACTIONS, "true");
assert.equal(process.env.RUNNER_ENVIRONMENT, "github-hosted");

function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
function parse(file) {
  return ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
}
const problems = [], counts = {};
function name(node, sf) {
  return ts.isIdentifier(node) || ts.isStringLiteral(node) ? node.text : node.getText(sf);
}
function catalog(file) {
  const sf = parse(file), lang = path.basename(file, ".ts");
  let root;
  for (const statement of sf.statements) if (ts.isVariableStatement(statement)) {
    for (const declaration of statement.declarationList.declarations)
      if (declaration.name.getText(sf) === lang) root = declaration.initializer;
  }
  assert.ok(root && ts.isObjectLiteralExpression(root), "missing catalog " + file);
  const leaves = [];
  function walk(object, prefix = "") {
    const seen = new Set();
    for (const property of object.properties) {
      const key = name(property.name, sf), full = prefix ? prefix + "." + key : key;
      if (seen.has(key)) problems.push(file + ": duplicate field " + full);
      seen.add(key);
      if (ts.isPropertyAssignment(property) && ts.isObjectLiteralExpression(property.initializer)) walk(property.initializer, full);
      else leaves.push(full);
    }
  }
  walk(root);
  return leaves.sort();
}
const localeFiles = files("app/locales").filter(file => /[/\\][a-z]{2}\.ts$/.test(file));
assert.equal(localeFiles.length, 20);
const reference = catalog("app/locales/cn.ts");
for (const file of localeFiles) {
  const actual = catalog(file);
  counts[path.basename(file, ".ts")] = actual.length;
  if (JSON.stringify(actual) !== JSON.stringify(reference)) problems.push(file + ": incomplete or extra catalog fields");
}

const technical = /^(?:NextChat(?: Artifacts)?|ChatGPT|Stability AI|Stable Diffusion(?: 3)?|Stable Image (?:Ultra|Core)|SD3 (?:Medium|Large(?: Turbo)?)|Mistral API (?:Key|URL)|JSON|PNG|JPEG|WebP|Markdown|HTML|HD|OpenAPI Schema|MCP|OAuth|WebDAV|API Key|API URL|px|2023-08-01-preview)$/;
function ordinary(text) {
  const value = text.replace(/\s+/g, " ").trim();
  return value && /[A-Za-z\u3400-\u9fff\u0400-\u04ff\u0600-\u06ff]/.test(value) &&
    !technical.test(value) && !value.startsWith("github.com/") && !/^(?:https?:\/\/|\/api\/)/.test(value);
}
const attrs = new Set(["title", "text", "placeholder", "aria", "aria-label", "alt", "label", "subTitle"]);
function string(node) {
  if (!node) return undefined;
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isJsxExpression(node) && node.expression) {
    if (ts.isStringLiteralLike(node.expression)) return node.expression.text;
    if (ts.isTemplateExpression(node.expression)) return node.expression.head.text + node.expression.templateSpans.map(span => span.literal.text).join(" ");
  }
}
for (const file of [...files("app/components"), "app/store/chat.ts", "app/utils/api-error.ts"].filter(file => /\.tsx?$/.test(file))) {
  const sf = parse(file);
  function report(node, value) {
    if (ordinary(value)) {
      const location = sf.getLineAndCharacterOfPosition(node.getStart(sf));
      problems.push(file + ":" + (location.line + 1) + ": hardcoded visible text " + JSON.stringify(value.trim()));
    }
  }
  function visit(node) {
    if (ts.isJsxText(node)) report(node, node.text);
    if (ts.isJsxAttribute(node) && attrs.has(node.name.getText(sf))) {
      const value = string(node.initializer);
      if (value !== undefined) report(node, value);
    }
    if (ts.isJsxExpression(node) && node.parent && (ts.isJsxElement(node.parent) || ts.isJsxFragment(node.parent))) {
      const value = string(node);
      if (value !== undefined) report(node, value);
    }
    if (ts.isCallExpression(node) && ["showToast", "showConfirm", "alert", "confirm"].includes(node.expression.getText(sf))) {
      const value = string(node.arguments[0]);
      if (value !== undefined) report(node, value);
    }
    // Icon-only controls must have a localized/technical accessible name.
    if ((ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) && node.tagName.getText(sf) === "IconButton") {
      const names = node.attributes.properties.filter(ts.isJsxAttribute).map(attribute => attribute.name.getText(sf));
      if (!["aria", "text", "title"].some(key => names.includes(key))) report(node, "Missing accessible label");
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
}
// Internal MCP status strings drive sorting and must keep a translated display mapping.
const mcp = parse("app/components/mcp-market.tsx"), statuses = new Set(), labels = new Set();
function statusWalk(node) {
  if (ts.isCallExpression(node) && node.expression.getText(mcp) === "updateLoadingState" && ts.isStringLiteral(node.arguments[1])) statuses.add(node.arguments[1].text);
  if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.name)) labels.add(node.name.text);
  ts.forEachChild(node, statusWalk);
}
statusWalk(mcp);
for (const status of statuses) if (!labels.has(status)) problems.push("MCP status has no localized display: " + status);

fs.mkdirSync("maintenance/acceptance-results", { recursive: true });
fs.writeFileSync("maintenance/acceptance-results/localization-audit.json", JSON.stringify({ languages: counts, problems, allCatalogsComplete: problems.length === 0 }, null, 2));
for (const problem of problems) console.error(problem);
assert.equal(problems.length, 0, "Localization source audit failed");
console.log("PASS localization audit: 20 complete catalogs, no duplicate keys, no hardcoded JSX/toast labels, accessible icon controls and translated MCP statuses");
