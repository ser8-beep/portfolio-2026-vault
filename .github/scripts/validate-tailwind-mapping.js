const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.join(process.cwd(), "tailwind.config.ts");
const TOKENS_PATH = path.join(process.cwd(), "tokens/tokens.json");

function fail(msg) {
  console.error(`❌ TAILWIND VALIDATION FAILED:\n${msg}`);
  process.exit(1);
}

function pass(msg) {
  console.log(`✅ ${msg}`);
}

function load(file) {
  return fs.readFileSync(file, "utf-8");
}

function checkRawColors(config) {
  const hexRegex = /#[0-9a-fA-F]{3,6}/g;
  const matches = config.match(hexRegex);

  if (matches) {
    fail(`Raw hex colors found in Tailwind config: ${matches.join(", ")}`);
  }
}

function checkArbitraryValues(config) {
  const arbitrary = /\[\d+px\]|\[\#.*?\]/g;
  const matches = config.match(arbitrary);

  if (matches) {
    fail(`Arbitrary values detected in Tailwind config: ${matches.join(", ")}`);
  }
}

function main() {
  if (!fs.existsSync(CONFIG_PATH)) {
    fail("tailwind.config.ts not found");
  }

  const config = load(CONFIG_PATH);

  checkRawColors(config);
  checkArbitraryValues(config);

  pass("Tailwind config is token-safe");
}

main();
