---
id: collaboration
title: Collaborate on GitHub Actions
sidebar_position: 5
---

Collaborate effectively when building and maintaining GitHub Actions workflows.

## Propose changes through pull requests

- Create a feature branch for workflow edits.
- Open a pull request (PR) describing the change and its impact.
- Request reviews from developers and DevOps owners.

```bash
git checkout -b chore/update-ci-workflow
git commit -am "ci: add coverage upload and cache"
git push -u origin chore/update-ci-workflow
```

## Review workflows consistently

Use a lightweight checklist:

- Workflow triggers are correct and minimal
- Secrets are referenced from `${{ secrets.* }}`
- Permissions follow least-privilege (`permissions:`)
- Steps are small and named clearly
- Caching is safe and keyed properly

## Use environments and protections

- Use GitHub **Environments** (staging, production) for gated deployments
- Add required reviewers for production deploys
- Use environment secrets for environment-specific tokens

```yaml
environments:
  production:
    reviewers: ["devops-team"]
```

## Document decisions

- Keep a `docs/ci/CHANGELOG.md` (or similar) for workflow changes
- Reference PR numbers and rationale ("why")
- Link to incidents or support tickets when applicable

## Handle secrets securely

- Store tokens in **Repository secrets** or **Organization secrets**
- Rotate credentials regularly
- Avoid printing secrets in logs (`set -x` off, `::add-mask::` if needed)

## Communicate status

- Enable PR checks required for merging (tests, build, lint)
- Use status badges in `README.md`

```markdown
![CI](https://github.com/<org>/<repo>/actions/workflows/ci.yml/badge.svg)
```

## Next steps

- See [Troubleshooting](troubleshooting.md) for common issues
- Review [Summary](summary.md) for optimization and security tips
