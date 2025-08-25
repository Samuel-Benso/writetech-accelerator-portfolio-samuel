---
slug: how-to-use-docusaurus-openapi-plugin
title: How to Use Docusaurus OpenAPI plugin
author: samuel-benson
tags: [docusaurus, documentation, jsonplaceholder, api]
description: This guide covers keyword research, on-page SEO, internal linking, meta descriptions, and more with clear steps and examples.
keywords: [how to rank blog post on google, seo for beginners, blog seo tips, rank higher on google, content optimization, on-page seo]
image: /img/seo-openapi-guide.png
---

<!-- truncate -->

If you keep API docs in sync by hand, you will eventually fall behind. The OpenAPI plugin for Docusaurus reads a single OpenAPI file and generates clean pages with paths, parameters, request bodies, responses, and schema details. This guide shows every step you need to go from zero to a working API reference inside a Docusaurus site, with examples you can paste into your project.

## Create or open a Docusaurus site

If you already have a site, skip to the next section.

```bash
npx create-docusaurus@latest my-site classic
cd my-site
npm install
npm run start
```

You should see the starter on [http://localhost:3000](http://localhost:3000)


## Install the plugin and the theme

The plugin converts OpenAPI to MDX files. The theme provides the `ApiItem` page component and styles.

```bash
# npm
npm install docusaurus-plugin-openapi-docs docusaurus-theme-openapi-docs

# or yarn
yarn add docusaurus-plugin-openapi-docs docusaurus-theme-openapi-docs
```


## Add plugin and theme to `docusaurus.config.js`

Open `docusaurus.config.js` and add the following. Each line matters, so compare carefully.

```js
// docusaurus.config.js
// add at top if not present
// const {themes: prismThemes} = require('prism-react-renderer');

module.exports = {
  // ...your existing config
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // This tells docs pages to render API items correctly
          docItemComponent: '@theme/ApiItem',
        },
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],

  // Plugin configuration
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'chimoney',            // a short id for this API set
        docsPluginId: 'classic',   // use the default docs instance
        config: {
          chimoney: {
            // where your OpenAPI file lives
            specPath: 'docs/api-documentation/api-reference/chimoney-spec.yaml',
            // where generated MDX files will be written
            outputDir: 'docs/api-documentation/api-reference/chimoney',
            // optional grouping in the sidebar
            sidebarOptions: { groupPathsBy: 'tag' },
          },
        },
      },
    ],
  ],

  // Export the theme so ApiItem is available
  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    navbar: {
      title: 'Samuel Benson',
      items: [
        // add a navbar item that points to the API sidebar id we define next
        { type: 'docSidebar', sidebarId: 'chimoney', label: 'Chimoney API', position: 'left' },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};
```

Why these fields

* `id` is the plugin instance name used by the CLI.
* `config.chimoney` is the unique id for one spec file. You can add more like `payments`, `admin`, and so on.
* `docItemComponent: '@theme/ApiItem'` activates API page rendering.


## Create folders and a minimal OpenAPI file

Create this structure inside `docs`:

```
docs/
  api-documentation/
    api-reference/
      chimoney-spec.yaml
```

Paste this valid but small OpenAPI example into `chimoney-spec.yaml`. It includes three common endpoints that are easy to scan.

```yaml
openapi: 3.0.3
info:
  title: Chimoney Demo API
  version: 1.0.0
  description: Demo spec used to generate docs in Docusaurus
servers:
  - url: https://api.example.com
tags:
  - name: Wallet
    description: Balance and transfers
  - name: Transfers
    description: Send money and check status

paths:
  /wallet/balance:
    get:
      tags: [Wallet]
      summary: Check wallet balance
      responses:
        '200':
          description: Current balance
          content:
            application/json:
              schema:
                type: object
                properties:
                  balance:
                    type: number
                    format: float

  /transfers/send:
    post:
      tags: [Transfers]
      summary: Send money
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [to, amount, currency]
              properties:
                to: { type: string, format: email }
                amount: { type: number }
                currency: { type: string, example: USD }
      responses:
        '201':
          description: Transfer created
          content:
            application/json:
              schema:
                type: object
                properties:
                  transferId: { type: string }

  /transfers/{id}/status:
    get:
      tags: [Transfers]
      summary: Get transfer status
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        '200':
          description: Status details
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    enum: [pending, completed, failed]
```


## Generate the MDX docs

Use the built in CLI. The command takes a single argument which is the plugin instance id or the per spec id. In our setup both are `chimoney`, so you can run either.

```bash
# generate docs for the chimoney spec
npx docusaurus gen-api-docs chimoney
```

This writes Markdown and a small `sidebar.ts` file into `docs/api-documentation/api-reference/chimoney`.

Tip for Windows PowerShell: do not split the command across lines with backslashes. Use one line exactly as shown.


## Expose the new sidebar in `sidebars.js`

The plugin writes files under `docs`, but Docusaurus needs a sidebar id to render them in the navbar. Add an autogenerated slice that points at the output directory.

```js
// sidebars.js
// keep your other sidebars above
module.exports = {
  profileSidebar: [
    { type: 'doc', label: 'Overview', id: 'intro' },
  ],

  toolingSidebar: [
    { type: 'doc', label: 'Introduction', id: 'documentation-tooling/intro' },
  ],

  apiSidebar: [
    { type: 'doc', label: 'Introduction', id: 'api-documentation/intro' },
  ],

  // new: matches navbar.sidebarId
  chimoney: [
    { type: 'autogenerated', dirName: 'api-documentation/api-reference/chimoney' },
  ],
};
```

Start the dev server.

```bash
npm run start
```

Open the site. You should see a Chimoney API item in the navbar. Click it to view the generated reference organized by tags.


## Make a change and regenerate

Edit the spec, for example add a response example to `GET /wallet/balance`.

```yaml
      responses:
        '200':
          description: Current balance
          content:
            application/json:
              examples:
                demo:
                  value: { balance: 125.50 }
              schema:
                type: object
                properties:
                  balance:
                    type: number
                    format: float
```

Regenerate:

```bash
npx docusaurus gen-api-docs chimoney
```

The pages update instantly in dev mode.


## Common errors and fixes

* ENOENT for specPath
  The CLI cannot find your OpenAPI file. Check the path in `specPath`. It is relative to the project root, not to the `docs` folder you are editing. Use the exact folder names.

* unknown option --id
  The OpenAPI CLI does not use flags for id. The correct pattern is `npx docusaurus gen-api-docs <id>` without `--id`.

* Navbar crash about missing sidebar id
  The navbar item uses `sidebarId: 'chimoney'`. Your `sidebars.js` must export an object with a key `chimoney`. If you renamed it, update both places.

* Sidebar has nothing to link to
  The generated output directory might be empty. Re run `gen-api-docs`, confirm the folder contains MDX files, then restart the dev server.


## Optional quality settings

Add grouping by tag in the plugin config, which we already set. You can also show standalone schema pages.

```js
sidebarOptions: { groupPathsBy: 'tag' },
showSchemas: true
```

You can change the navbar label without touching file paths.

```js
{ type: 'docSidebar', sidebarId: 'chimoney', label: 'API Reference' }
```

## Build and deploy

When your docs look right, build as usual.

```bash
npm run build
npm run serve
```

Everything under `docs/api-documentation/api-reference/chimoney` is generated, so do not edit those MDX files by hand. Edit the OpenAPI file and regenerate instead.

