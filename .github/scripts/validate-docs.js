const fs = require("fs");
const path = require("path");

const DOC_ROOT = process.cwd();

const REQUIRED_COMPONENT_SECTIONS = [
  "Purpose",
  "Behaviour",
  "Tokens",
  "Accessibility",
  "Responsive",
];

function fail(msg) {
  console.error(`❌ DOC VALIDATION FAILED:\n${msg}`);
  process.exit(1);
}

function pass(msg) {
  console.log(`✅ ${msg}`);
}

function scanMarkdownFiles(dir) {
  let results = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(scanMarkdownFiles(fullPath));
    } else if (file.endsWith(".md")) {
      results.push(fullPath);
    }
  }

  return results;
}

function validateComponentDoc(file) {
  const content = fs.readFileSync(file, "utf-8");

  const missing = REQUIRED_COMPONENT_SECTIONS.filter(
    (section) => !content.includes(section)
  );

  if (missing.length) {
    fail(
      `Component doc invalid: ${file}\nMissing sections: ${missing.join(
        ", "
      )}`
    );
  }
}

function main() {
  const docs = scanMarkdownFiles(path.join(DOC_ROOT, "03-components"));

  if (!docs.length) {
    fail("No component docs found in /03-components");
  }

  docs.forEach(validateComponentDoc);

  pass("All component documentation is structurally valid");
}

main();
