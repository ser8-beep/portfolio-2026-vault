name: AI Readability Check

on:
  pull_request:

jobs:
  ai-check:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - run: node scripts/validate-ai-readiness.js
