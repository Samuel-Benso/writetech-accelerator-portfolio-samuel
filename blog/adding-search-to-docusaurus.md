---
slug: adding-search-to-docusaurus
title: Adding a Functional Search Bar to Your Docusaurus Site
authors: samuel-benson
tags: [documentation, docusaurus, search, tutorial]
description: Learn how to add a powerful local search feature to your Docusaurus documentation with this step-by-step guide.
keywords: [docusaurus search, local search, add search to docusaurus, documentation search, site search, offline search]
image: /img/search-banner.jpg
---


Have you ever visited a website and struggled to find what you needed? A good search function helps people find information quickly. In this post, I'll show you how to add a powerful local search feature to your Docusaurus site that works offline and requires no external services.

## What You'll Need

1. A Docusaurus project (version 2.0 or later)
2. Node.js and npm installed

## Install the Local Search Plugin

First, install the local search plugin by running this command in your terminal:

```bash
npm install @easyops-cn/docusaurus-search-local
```

## Update Your Docusaurus Configuration

Open your `docusaurus.config.js` file and add the local search plugin to your plugins array:

```javascript
plugins: [
  // ... other plugins
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      indexDocs: true,
      indexBlog: true,
      indexPages: true,
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
    },
  ],
],
```

## Add the Search Bar to Your Navbar

In your `docusaurus.config.js`, add the search bar to your navbar items:

```javascript
items: [
  // ... other items
  {
    type: 'search',
    position: 'right',
  },
]
```

## Build and Test Your Site

Build your Docusaurus site to generate the search index:

```bash
npm run build
```

Then serve the built files to test the search:

```bash
npm run serve
```

Visit `http://localhost:3000` and you should see a search icon in the navbar. The first time you click it, it will build the search index (this might take a few seconds). After that, you can search across all your documentation and blog posts.

## Benefits of Local Search

- Works offline after the first load
- No external dependencies or API keys required
- Fast and responsive
- Indexes all your content during build time
- Supports fuzzy search for better results

## Troubleshooting

- If the search doesn't work, try clearing your browser cache
- Make sure you've built your site after adding the search plugin
- Check your browser's console for any error messages
- Ensure all the routes you want to index are correctly specified in the plugin configuration

## Conclusion

Adding local search to your Docusaurus site is a great way to improve user experience without relying on external services. The setup is simple, and the performance is excellent since everything runs in the browser.

Have you tried adding search to your documentation? Let me know in the comments if you have any questions or run into any issues!
