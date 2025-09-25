# Create a GitHub Actions workflow

Build and test your code automatically with GitHub Actions workflows.

## Write a basic workflow

Create a `.github/workflows` directory in your repository root, then add a workflow file.

### 1. Create the workflow file

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm test

    - name: Build project
      run: npm run build
```

### 2. Customize the workflow

#### Add a build step

```yaml
- name: Build for production
  run: npm run build

- name: Upload build artifacts
  uses: actions/upload-artifact@v4
  with:
    name: build-files
    path: dist/
```

#### Add testing with coverage

```yaml
- name: Run tests with coverage
  run: npm test -- --coverage

- name: Upload coverage reports
  uses: codecov/codecov-action@v3
  with:
    file: ./coverage/lcov.info
```

#### Add linting

```yaml
- name: Run linter
  run: npm run lint

- name: Check code formatting
  run: npm run format:check
```

## Test the workflow

### 1. Commit and push changes

```bash
git add .github/workflows/ci.yml
git commit -m "Add CI workflow with GitHub Actions"
git push origin main
```

### 2. Monitor workflow execution

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Select your workflow run to view logs
4. Check each step for success or failure

### 3. Debug common issues

If your workflow fails:

1. Click the failed job in the Actions tab
2. Expand the failed step to see error logs
3. Check the **Set up job** logs for environment details

## Example workflow for different project types

### Node.js application

```yaml
name: Node.js CI

on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

### Python application

```yaml
name: Python application

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.8", "3.9", "3.10"]

    steps:
    - uses: actions/checkout@v4
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v4
      with:
        python-version: ${{ matrix.python-version }}
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run tests
      run: python -m pytest
```

## Next steps

- [Deploy applications automatically](setup.md#deploy-applications)
- [Set up notifications for workflow status](troubleshooting.md#workflow-notifications)
- [Optimize workflow performance](summary.md#workflow-optimization)
