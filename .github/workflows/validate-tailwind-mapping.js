name: Validate Tailwind Token Mapping

on:
  pull_request:

jobs:
  tailwind-sync:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - name: Check token mapping
        run: node scripts/validate-tailwind-mapping.js
