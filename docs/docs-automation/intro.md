# Documentation Quality Automation 

This project sets up **automated checks** for documentation quality using [Vale](https://vale.sh) and [Spectral](https://stoplight.io/open-source/spectral). The goal is to enforce consistent standards for style, grammar, and API specifications across our docs.



## 🔧 What I Set Up

* **Vale Linter** to catch style, grammar, and clarity issues in documentation.
* **Spectral Linter** to validate API specifications against OpenAPI best practices.
* **GitHub Actions Workflow** that automatically runs Vale and Spectral checks on every commit or pull request.
* Config files (`.vale.ini` and `.spectral.yaml`) for customizing the rules enforced.

![Screenshot of rules enforced](/img/jobb.png)
[Live link](https://github.com/Samuel-Benso/writetech-accelerator-portfolio-samuel/actions/runs/17347588932/job/49249573164#logs)

## Rules & Standards Enforced

### Vale

* Consistent **tone and style** (formal yet simple).
* Avoiding **passive voice** in technical writing.
* Enforcing **heading structure** (H1, H2, etc.).
* Checking for **spelling errors**.
* Highlighting **wordiness and redundant phrases**.

### Spectral

* Ensures OpenAPI specs follow **industry best practices**.
* Validates **naming conventions** (camelCase, snake\_case).
* Flags **missing descriptions** for parameters and responses.
* Enforces **response codes** (e.g., 2xx, 4xx, 5xx).
* Detects **unused or duplicated components**.


## Workflow Logs (Optional)

You can include screenshots of successful workflow runs here for reference. Example:

```
✔ check-vale succeeded in 2s  
✔ check-spectral succeeded in 3s
```

## Challenges Faced

* Understanding the **difference** between Vale (writing quality) and Spectral (API spec quality).
* Setting up **GitHub Actions** with the correct permissions and paths.
* Configuring **custom rules** that fit the project’s style guide.


## What I Learned

* How to integrate **automated linting** into CI/CD pipelines.
* The importance of **consistent style enforcement** across documentation.
* How Spectral rules help keep **OpenAPI specs clean and compliant**.
* How to read and debug **GitHub Actions workflow logs**.


With this setup, documentation quality is **automatically checked**, making reviews faster and ensuring high standards across the project.

