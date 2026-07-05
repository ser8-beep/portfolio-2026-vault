const fs = require("fs");
const path = require("path");

const TOKEN_PATH = path.join(process.cwd(), "tokens");

const REQUIRED_LAYERS = [
  "global",
  "semantic",
  "component",
  "state",
  "motion",
  "responsive",
];

function loadJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function fail(message) {
  console.error(`❌ TOKEN VALIDATION FAILED:\n${message}`);
  process.exit(1);
}

function pass(msg) {
  console.log(`✅ ${msg}`);
}

function checkRequiredLayers(tokens) {
  const missing = REQUIRED_LAYERS.filter((layer) => !tokens[layer]);
  if (missing.length) {
    fail(`Missing required token layers: ${missing.join(", ")}`);
  }
  pass("All required token layers exist");
}

function detectRawValues(obj, path = "") {
  const violations = [];

  const isHex = (v) => typeof v === "string" && v.startsWith("#");
  const isPx = (v) => typeof v === "string" && v.endsWith("px");

  function walk(node, currentPath) {
    if (typeof node !== "object" || node === null) return;

    for (const key of Object.keys(node)) {
      const value = node[key];
      const nextPath = `${currentPath}.${key}`;

      if (typeof value === "string") {
        if (isHex(value) || isPx(value)) {
          violations.push(`${nextPath} → ${value}`);
        }
      } else if (typeof value === "object") {
        walk(value, nextPath);
      }
    }
  }

  walk(obj, path);
  return violations;
}

function main() {
  const tokensFile = path.join(TOKEN_PATH, "tokens.json");

  if (!fs.existsSync(tokensFile)) {
    fail("tokens.json not found in /tokens");
  }

  const tokens = loadJSON(tokensFile);

  checkRequiredLayers(tokens);

  const violations = detectRawValues(tokens.semantic || {}, "semantic");

  if (violations.length) {
    fail(
      "Raw values detected in semantic tokens:\n" +
        violations.join("\n")
    );
  }

  pass("Token structure is valid and deterministic");
}

main();
