# Rationale — Traceable Playwright Showcase

## 🧠 Why Playwright?
Playwright offers robust cross-browser automation, built-in tracing, and powerful selectors — ideal for scalable, reliable testing. Its native support for modern async patterns and parallel execution aligns well with CI/CD pipelines.

## 🧱 Why Page Object Model (POM)?
The Page Object Model improves maintainability and readability by encapsulating UI interactions. Each page class handles its own selectors and actions, making the test suite modular and easy to extend.

## 🧪 Test Design Philosophy
- **Data-driven testing**: Uses `test.each` to iterate over multiple product flows
- **Layered architecture**: `POManager` centralizes page object access, reducing import clutter
- **Traceability**: Every test run generates logs and traces for debugging and audit
- **CI-ready**: `ci.sh` installs dependencies, runs tests, and logs results in one step

## ⚖️ Trade-offs Considered
- **Speed vs. Coverage**: Prioritized realistic user flows over exhaustive edge cases
- **Mocking vs. Real Data**: Chose real data to validate full-stack behavior, accepting minor flakiness
- **Custom selectors vs. auto-generated locators**: Used Playwright’s robust locator engine for simplicity, with fallback to custom selectors where needed

## 📦 Folder Structure