# Troubleshoot GitHub Actions workflows

Resolve common issues with GitHub Actions workflows and improve reliability.

## Workflow fails to trigger

### Check trigger conditions

Ensure your workflow triggers on the correct events:

```yaml
on:
  push:
    branches: [ main, develop ]  # Triggers only on these branches
  pull_request:
    branches: [ main ]           # Triggers on PRs to main
```

**Solution**: Verify branch names and event types match your repository setup.

### Check file paths

If your workflow only runs on specific file changes:

```yaml
on:
  push:
    paths:
      - 'src/**'        # Only triggers on changes to src/ directory
      - 'package.json'  # Or specific files
```

**Solution**: Use `paths-ignore` to exclude certain files or directories.

## Permission errors

### Grant necessary permissions

For workflows that need to write to the repository:

```yaml
permissions:
  contents: write      # Allows pushing to repository
  issues: write        # Allows creating issues
  pull-requests: write # Allows creating PRs
```

**Solution**: Add the `permissions` key to your job or workflow.

### Use personal access tokens

For workflows that access external resources:

```yaml
- name: Access external API
  run: |
    curl -H "Authorization: Bearer ${{ secrets.API_TOKEN }}" \
         https://api.example.com/data
```

**Solution**: Store sensitive tokens in repository secrets.

## Dependency and environment issues

### Cache dependencies

Speed up builds by caching dependencies:

```yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

**Solution**: Add caching for package managers like npm, pip, or Maven.

### Set up multiple environments

Test across different operating systems and versions:

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [16, 18, 20]
```

**Solution**: Use matrix builds for comprehensive testing.

## Workflow timing out

### Increase timeout limits

For long-running jobs:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 30  # Default is 6 hours for self-hosted, 6 minutes for GitHub-hosted
```

**Solution**: Set appropriate timeout values for your workflow steps.

### Optimize workflow performance

Break large jobs into smaller steps:

```yaml
- name: Install dependencies
  run: npm ci

- name: Run tests
  run: npm test

- name: Build artifacts
  run: npm run build
```

**Solution**: Split complex tasks into separate steps for better error isolation.

## Secret and environment variable issues

### Access workflow secrets

Use secrets in your workflow:

```yaml
- name: Deploy to production
  run: |
    echo "Deploying with token: ${{ secrets.DEPLOY_TOKEN }}"
    ./deploy.sh ${{ secrets.DEPLOY_TOKEN }}
```

**Solution**: Reference secrets using the `${{ secrets.SECRET_NAME }}` syntax.

### Set environment variables

Define environment variables for your workflow:

```yaml
env:
  NODE_ENV: production
  API_URL: https://api.example.com

jobs:
  build:
    steps:
    - name: Use environment variables
      run: echo "API URL is $API_URL"
```

**Solution**: Use environment variables for configuration that changes between environments.

## Network and connectivity issues

### Retry failed network requests

For unreliable network operations:

```yaml
- name: Retry npm install
  uses: nick-invision/retry@v2
  with:
    timeout_minutes: 10
    max_attempts: 3
    command: npm install
```

**Solution**: Use retry actions or implement retry logic in your scripts.

### Test external connectivity

```yaml
- name: Test external API
  run: |
    curl -f https://api.example.com/health || exit 1
```

**Solution**: Add health checks for external dependencies.

## Debugging workflow issues

### Enable debug logging

Add debug mode to your workflow:

```yaml
- name: Enable debug logging
  run: |
    echo "ACTIONS_STEP_DEBUG=true" >> $GITHUB_ENV
    echo "ACTIONS_RUNNER_DEBUG=true" >> $GITHUB_ENV
```

**Solution**: Set debug environment variables to get more detailed logs.

### Use workflow commands

Add logging to your workflow:

```yaml
- name: Log environment
  run: |
    echo "## Environment Information"
    echo "Runner OS: ${{ runner.os }}"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
```

**Solution**: Use GitHub workflow commands to provide better context in logs.

## Get help

If you encounter issues not covered here:

1. Check the [GitHub Actions documentation](https://docs.github.com/en/actions)
2. Search [GitHub Community Discussions](https://github.community/c/code-to-cloud/github-actions/41)
3. Review your workflow logs in the Actions tab
4. Test changes in a separate branch before merging

## Next steps

- [Optimize workflow performance](summary.md#performance-optimization)
- [Set up workflow security](summary.md#security-considerations)
- [Monitor workflow usage](summary.md#monitoring-and-alerts)
