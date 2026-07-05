const fs = require("fs");
const path = require("path");

const EXPECTED_STRUCTURE = [
  "00-foundations",
  "01-principles",
  "02-interactions",
  "03-components",
  "04-layouts",
  "05-navigation",
  "06-patterns",
  "07-information-architecture",
  "08-content",
  "tokens",
  "implementation",
];

function fail(msg) {
  console.error(`❌ IA VALIDATION FAILED:\n${msg}`);
  process.exit(1);
}

function pass(msg) {
  console.log(`✅ ${msg}`);
}

function main() {
  const root = process.cwd();

  const folders = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const missing = EXPECTED_STRUCTURE.filter(
    (dir) => !folders.includes(dir)
  );

  if (missing.length) {
    fail(`Missing folders:\n${missing.join("\n")}`);
  }

  pass("Information architecture structure is valid");
}

main();
