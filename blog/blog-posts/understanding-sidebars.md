---
slug: how-to-use-openapi-plugin-docusaurus
title: How Docusaurus Sidebars and Config Files Work to Shape Your Website
authors: samuel-benson
tags: [docusaurus, openapi, documentation, api]
description: Learn how to structure sidebars and the docusaurus.config file to create smooth navigation, clear tabs, and working pages on your Docusaurus site. Step-by-step examples included.
keywords: [docusaurus openapi plugin, api documentation docusaurus, generate api docs docusaurus]
image: /img/openapi-docusaurus.png
---

<!-- truncate -->

When you build a website with Docusaurus, two files shape how your site looks and works: **sidebars.js** and **docusaurus.config.js**. If you set them up well, your visitors will enjoy smooth navigation, clear tabs, and working pages. But if you miss a detail, your site may break. This guide explains how both files work, what their structures mean, and how you can use them safely with real examples.


## What the Sidebars File Does

The **sidebars.js** file controls the left-hand navigation in your documentation pages. Think of it like a table of contents. It tells Docusaurus what order to show your docs in and how they are grouped.

### Simple Sidebar Example

```js
module.exports = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Advanced Guides',
      items: ['deep-dive', 'api-overview'],
    },
  ],
};
```

**What this means:**

* `tutorialSidebar`: This is the name of the sidebar. You can call it anything you want.
* `'intro'` and `'getting-started'`: These point to markdown files in your `docs` folder. Docusaurus shows them as links.
* `type: 'category'`: This groups items together. In this case, "Advanced Guides" has two items: `deep-dive` and `api-overview`.

If you leave out the sidebar or point to the wrong file name, your page may not show in navigation.


## What the Config File Does

The **docusaurus.config.js** file sets up the big picture of your site. It manages titles, themes, navbar items, plugins, and more.

### Basic Configuration

```js
module.exports = {
  title: 'My Docusaurus Site',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'my-org',
  projectName: 'my-site',

  themeConfig: {
    navbar: {
      title: 'My Site',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
  },
};
```

**What this means:**

* `title`: The site’s name. This shows up in the browser tab and search engines.
* `url` and `baseUrl`: These tell Docusaurus where your site is hosted. If wrong, your site may not load correctly.
* `themeConfig.navbar.items`: This controls the top navigation tabs. For example, `Docs` links to `/docs/intro`, and `Blog` links to your blog index.


## How They Work Together

The **sidebar** organizes pages within the docs section. The **config file** decides where that docs section appears on the site.

### Linking Documentation in Navbar

If your config file has this:

```js
{ to: '/docs/intro', label: 'Docs', position: 'left' }
```

And your sidebar includes `intro`, visitors can click the "Docs" tab in the navbar and then see the sidebar navigation on the left.

If `intro` is missing from the sidebar, the Docs tab still opens, but users will not see helpful navigation.


## Tips to Avoid Breaking

1. **Match names carefully.** The file names in sidebars must match the doc file names.
2. **Use categories for structure.** Group related docs together so visitors do not get lost.
3. **Check links in config.** A wrong `to: '/docs/...’` path will give you broken tabs.
4. **Test locally before deploying.** Run `npm run start` to catch issues.


## SEO and User Experience Boost

Since this post is on your **Docusaurus blog**, here’s how you can help it appear on Google:

* Add keywords like *Docusaurus sidebar*, *docusaurus.config*, and *navigation setup* naturally in your content.
* Write a strong meta description (like the one above).
* Link to related posts, such as “How to Add OpenAPI Plugin to Docusaurus.”
* Keep sentences short and clear so both humans and search engines can understand.

## Conclusion

The sidebar and config files are the backbone of your Docusaurus site. The sidebar shapes your documentation flow, while the config file sets your site’s big picture. With clear structures and careful matching, you can build tabs and pages that work without breaking. Test often, write clean structures, and your visitors will have a smooth journey through your site.