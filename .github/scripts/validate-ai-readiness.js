const fs = require("fs");
const path = require("path");

function fail(msg) {
  console.error(`❌ AI READINESS FAILED:\n${msg}`);
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
    } else if (item.endsWith(".md")) {
      files.push(full);
    }
  }

  return files;
}

function validate(file) {
  const content = fs.readFileSync(file, "utf-8");

  const required = [
    "Purpose",
    "Tokens",
    "Behaviour",
    "Accessibility",
  ];

  const missing = required.filter((r) => !content.includes(r));

  if (missing.length) {
    fail(
      `AI unreadable file: ${file}\nMissing: ${missing.join(", ")}`
    );
  }

  if (content.length < 200) {
    fail(`File too minimal (likely ambiguous): ${file}`);
  }
}

function main() {
  const files = scan(path.join(process.cwd(), "03-components"));

  files.forEach(validate);

  console.log("✅ Repository is AI-consumable");
}

main();
