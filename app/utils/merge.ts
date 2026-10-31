export function merge(target: any, source: any) {
  if (!source || typeof source !== "object") return;
  Object.keys(source).forEach((key) => {
    // Backup fields must never traverse or overwrite JavaScript prototypes.
    if (["__proto__", "constructor", "prototype"].includes(key)) return;
    const value = source[key];
    if (value && typeof value === "object") {
      const current = Object.prototype.hasOwnProperty.call(target, key)
        ? target[key]
        : undefined;
      target[key] =
        current && typeof current === "object"
          ? current
          : Array.isArray(value)
          ? []
          : {};
      merge(target[key], value);
    } else {
      target[key] = value;
    }
  });
}
