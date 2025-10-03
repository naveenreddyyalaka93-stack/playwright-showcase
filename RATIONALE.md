
---

## ** RATIONALE.md**

```markdown
# Rationale — Playwright Showcase

**Why Playwright?**
- Modern, fast, supports multiple browsers.
- Easy integration with CI/CD.
- Built-in reporting and test isolation.

**Why Page Object Model (POM)?**
- Improves readability and maintainability.
- Reusable across multiple test cases.
- Abstracts UI changes to a single layer.

**Trade-offs**
- Setup takes longer than simple inline scripts.
- Requires ongoing maintenance as app grows.

**Limitations**
- Tests cover happy-path only.
- No API or DB-level checks yet.
- Browser setup increases initial run time.

**Future Enhancements**
- Add API mocks for faster runs.
- Increase negative test coverage.
- Integrate with CI/CD pipelines (GitHub Actions, Jenkins).
