name: Prevent Hardcoded Styles

on:
  pull_request:

jobs:
  lint-css:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - run: npx eslint .
