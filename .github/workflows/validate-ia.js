name: Validate IA Structure

on:
  pull_request:

jobs:
  ia-check:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - run: node scripts/validate-ia.js
