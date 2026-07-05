name: Validate Design Tokens

on:
  pull_request:
  push:
    branches: [main]

jobs:
  validate-tokens:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - name: Validate token schema
        run: node scripts/validate-tokens.js
        
