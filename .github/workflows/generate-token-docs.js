name: Generate Token Docs

on:
  push:
    branches: [main]

jobs:
  generate:
    runs-on: ubuntu-latest

    steps:
      - run: node scripts/generate-token-docs.js
