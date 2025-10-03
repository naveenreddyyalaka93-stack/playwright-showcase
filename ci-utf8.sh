#!/bin/bash
set -e

# Install dependencies if not present
if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm ci || npm install
  npx playwright install --with-deps
fi

# Run tests and save logs
echo "Running Playwright tests..."
npx playwright test --reporter=list | tee report.log
EXIT_CODE=${PIPESTATUS[0]}

if [ $EXIT_CODE -eq 0 ]; then
  echo "RESULT: PASS"
  exit 0
else
  echo "RESULT: FAIL"
  exit $EXIT_CODE
fi
