name: Validate Design Docs

on:
  pull_request:

jobs:
  docs-lint:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - name: Validate documentation structure
        run: node scripts/validate-docs.js
