const fs = require("fs");
const path = require("path");

function fail(msg) {
  console.error(`❌ CSS VALIDATION FAILED:\n${msg}`);
  process.exit(1);
}

function scan(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      files = files.concat(scan(full));
    } else if (/\.(js|jsx|ts|tsx)$/.test(item)) {
      files.push(full);
    }
  }

  return files;
}

function checkFile(file) {
  const content = fs.readFileSync(file, "utf-8");

  const violations = [];

  const hex = content.match(/#[0-9a-fA-F]{3,6}/g);
  const arbitrary = content.match(/\[\d+px\]|\[\#.*?\]/g);

  if (hex) violations.push(`Hex colors: ${hex.join(", ")}`);
  if (arbitrary) violations.push(`Arbitrary values: ${arbitrary.join(", ")}`);

  if (violations.length) {
    fail(`File: ${file}\n${violations.join("\n")}`);
  }
}

function main() {
  const files = scan(path.join(process.cwd(), "components"));

  files.forEach(checkFile);

  console.log("✅ CSS usage is token-compliant");
}

main();
