---
id: setup
title: Set up GitHub Actions
sidebar_position: 2
---

Set up GitHub Actions to automate your development workflow.

## Before you begin

- Create a [GitHub account](https://github.com/signup)
- [Install Git](https://git-scm.com/downloads)
- Install a code editor like [VS Code](https://code.visualstudio.com/)
- Basic command-line knowledge

## Set up your project

### 1. Create a project directory

```bash
mkdir my-github-actions-project
cd my-github-actions-project
```

### 2. Initialize a Git repository

```bash
git init
```

### 3. Create project files

Create minimal files so the workflow has something to build/test.

```bash
printf "<!DOCTYPE html>\n<html>\n<head><title>GitHub Actions Project</title></head>\n<body><h1>GitHub Actions Project</h1></body>\n</html>\n" > index.html
printf "# GitHub Actions Project\n\nThis project demonstrates GitHub Actions workflows.\n" > README.md
```

### 4. Commit your changes

```bash
git add .
git commit -m "Initial commit"
```

### 5. Create a GitHub repository and push

1. Go to https://github.com/new and create a repository
2. Follow the instructions GitHub shows after creating the repository, for example:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

## Next steps

Create your first workflow in [step_by_step.md](step_by_step.md).
