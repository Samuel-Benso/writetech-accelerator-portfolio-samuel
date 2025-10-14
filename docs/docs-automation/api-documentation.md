---
title: API Documentation with Redoc and Spectral
sidebar_position: 2
---

# API Documentation with Redoc and Spectral

This project demonstrates how to create beautiful, interactive API documentation using Redoc and validate it with Spectral. The documentation is automatically generated from an OpenAPI specification.

## Features

- Interactive API documentation
- Searchable endpoints
- Code samples in multiple languages
- Real-time validation
- Customizable theme
- API style guide enforcement

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- Docker (for local development with Spectral)

### Installation

1. Install the required dependencies:

```bash
npm install -g @redocly/cli @stoplight/spectral-cli
```

2. Start the development server:

```bash
redocly preview-docs docs/docs-automation/openapi.yaml --port 3000
```

3. Open your browser to `http://localhost:3000` to view the documentation.

## Validating with Spectral

To validate the OpenAPI specification against the style guide:

```bash
spectral lint docs/docs-automation/openapi.yaml --ruleset spectral.yaml
```

## Project Structure

```
docs/
  docs-automation/
    openapi.yaml          # OpenAPI specification
    api-documentation.md  # This documentation
    ...
spectral.yaml           # Spectral rules
redocly.yaml           # Redoc configuration
```

## Customizing the Theme

Edit the `redocly.yaml` file to customize the appearance of your API documentation. You can change colors, typography, and layout to match your brand.

## Deployment

This documentation can be deployed to any static hosting service. For example, to deploy to GitHub Pages:

1. Build the static site:

```bash
redocly build-docs docs/docs-automation/openapi.yaml --output=build
```

2. Deploy the `build` directory to your hosting service.

## Best Practices

1. Keep your OpenAPI specification up to date
2. Use descriptive summaries and descriptions
3. Include examples for all request/response schemas
4. Document all possible error responses
5. Use consistent naming conventions
6. Validate your API specification regularly

## Troubleshooting

- If you encounter validation errors, check the Spectral output for details
- Ensure all required fields are documented in your OpenAPI specification
- Verify that all `$ref` paths are correct
- Check for YAML syntax errors if the file fails to load

## Resources

- [OpenAPI Specification](https://swagger.io/specification/)
- [Redoc Documentation](https://github.com/Redocly/redoc)
- [Spectral Documentation](https://meta.stoplight.io/docs/spectral/)
- [Redocly CLI](https://redocly.com/docs/cli/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
