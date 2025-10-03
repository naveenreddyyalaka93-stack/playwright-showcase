# Rationale — Traceable Playwright Showcase

##  Why Playwright?
Playwright offers robust cross-browser automation, built-in tracing, and powerful selectors — ideal for scalable, reliable testing. Its native support for modern async patterns and parallel execution aligns well with CI/CD pipelines.

##  Why Page Object Model (POM)?
The Page Object Model improves maintainability and readability by encapsulating UI interactions. Each page class handles its own selectors and actions, making the test suite modular and easy to extend.

##  Test Design Philosophy
- **Data-driven testing**: Uses `test.each` to iterate over multiple product flows
- **Layered architecture**: `POManager` centralizes page object access, reducing import clutter
- **Traceability**: Every test run generates logs and traces for debugging and audit
- **CI-ready**: `ci.sh` installs dependencies, runs tests, and logs results in one step

##  Trade-offs Considered
- **Speed vs. Coverage**: Prioritized realistic user flows over exhaustive edge cases
- **Mocking vs. Real Data**: Chose real data to validate full-stack behavior, accepting minor flakiness
- **Custom selectors vs. auto-generated locators**: Used Playwright’s robust locator engine for simplicity, with fallback to custom selectors where needed

##  Folder Structure

traceable-playwright/
├── ci.sh                  # One-liner test runner
├── README.md              # Project overview and setup instructions
├── rationale.md           # This file
├── BUGS/                  # Bug reports and issue documentation
│   ├── bug-report-1.md
│   └── bug-report-2.md
├── test-results/          # Logs, screenshots, reports
│   ├── report.log
│   └── playwright-report/
├── pageobjects/           # Modular POM classes
├── tests/                 # Playwright test specs
├── utils/                 # Test data and helpers
├── env/                   # Environment config files
├── .gitignore             # Ignore node_modules, reports, etc.
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Dependency lock file
└── playwright.config.ts   # Playwright configuration