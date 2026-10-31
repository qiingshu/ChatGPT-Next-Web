// Real public HTTPS requests; no model credentials or production environment variables.
const assert = require("node:assert/strict");
const fs = require("node:fs");
module.exports = async function verifyProxyNetwork(base, out) {
  assert.equal(process.env.GITHUB_ACTIONS, "true");
  assert.equal(process.env.RUNNER_ENVIRONMENT, "github-hosted");
  const applicationAuth = "Bearer nk-nextchat-security-fixture-code";
  async function proxy(target, path = "", init = {}) {
    return fetch(base + "/api/proxy" + path, {
      ...init, signal: AbortSignal.timeout(35000),
      headers: { "X-Base-URL": target, "X-NextChat-Authorization": applicationAuth, ...init.headers },
    });
  }
  const blocked = [
    "https://127.0.0.1", "https://127.1", "https://2130706433", "https://0x7f000001",
    "https://10.0.0.1", "https://172.16.0.1", "https://192.168.0.1",
    "https://100.100.100.200", "https://169.254.169.254", "https://168.63.129.16",
    "https://[::1]", "https://[::ffff:127.0.0.1]", "https://[fd00:ec2::254]",
    "https://[64:ff9b::a9fe:a9fe]", "https://metadata.google.internal",
    "http://example.com", "https://user:pass@example.com",
  ];
  for (const target of blocked) {
    const response = await proxy(target);
    assert.equal(response.status, 400, "unsafe proxy target must be refused: " + target);
    await response.arrayBuffer();
  }
  assert.equal((await fetch(base + "/api/unknown-provider/path", { headers: { "X-Base-URL": "https://example.com" } })).status, 404);
  // Public echo APIs confirm DNS pinning, TLS, body streaming, custom headers
  // and separation of site access codes from upstream plugin authorization.
  const hosts = ["https://httpbingo.org", "https://httpbin.org"];
  let verifiedHost, failures = 0;
  for (const host of hosts) {
    try {
      const response = await proxy(host, "/anything", {
        method: "POST",
        headers: { Authorization: "Bearer fixture-plugin-only", "Content-Type": "application/json", "X-Plugin-Fixture": "preserved", Cookie: "fixture=must-not-forward" },
        body: JSON.stringify({ fixture: "public-https" }),
      });
      assert.equal(response.status, 200);
      const data = await response.json();
      const headers = Object.fromEntries(Object.entries(data.headers).map(([key, value]) => [key.toLowerCase(), Array.isArray(value) ? value.join(", ") : value]));
      assert.equal(headers.authorization, "Bearer fixture-plugin-only");
      assert.equal(headers["x-plugin-fixture"], "preserved");
      assert.equal(headers["x-nextchat-authorization"], undefined);
      assert.equal(headers["x-base-url"], undefined);
      assert.equal(headers.cookie, undefined);
      assert.deepEqual(data.json, { fixture: "public-https" });
      verifiedHost = host;
      break;
    } catch { failures++; }
  }
  assert.ok(verifiedHost, "public HTTPS proxy echo verification failed; no provider secrets were used");
  for (const destination of ["http://169.254.169.254/", "https://127.0.0.1/", "https://[::1]/", "https://example.com/"]) {
    const response = await proxy(verifiedHost, "/redirect-to?url=" + encodeURIComponent(destination));
    assert.equal(response.status, 400, "upstream redirects must be refused");
    await response.arrayBuffer();
  }
  const summary = { hostedRunnerOnly: true, realPublicHttps: true, publicHost: verifiedHost,
    blockedTargets: blocked.length, redirectTargets: 4, customPluginHeadersPreserved: true,
    requestBodyPreserved: true, siteAccessCodeAndCookiesNotForwarded: true,
    providerCredentialsUsed: false, fallbackHostsFailed: failures };
  fs.writeFileSync(out + "/security-network.json", JSON.stringify(summary, null, 2));
  console.log("PASS real public HTTPS proxy, private/metadata targets, redirects and header isolation");
};
