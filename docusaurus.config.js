// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Writer & Software Engineer',
  tagline:
    'This is my portfolio for the WriteTech Accelerator Program, showcasing projects from each module and final deliverables.',
  favicon: 'img/favicon-32x32.png',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', // Update this later for deployment
  projectName: 'docusaurus', // Update this later for deployment

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem', // Required for OpenAPI theme
          routeBasePath: '/', // Serve the docs at the site root
          editUrl:
            'https://github.com/Samuel-Benso/writetech-accelerator-portfolio-samuel',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/WriteTech-Hub/writetech-accelerator-portfolio-zainab',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ✅ OpenAPI Plugin + Theme
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'chimoney',
        docsPluginId: 'classic',
        config: {
          chimoney: {
            specPath: 'docs/api-documentation/api-reference/chimoney-spec.yaml',
            outputDir: 'docs/api-documentation/api-reference/chimoney',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
    // Local search plugin
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

  themes: ['docusaurus-theme-openapi-docs'], // 🔑 Required for API theme

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Samuel Benson',
      logo: {
        alt: 'Samuel Benson headshot',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'About Me',
        },
        {
          to: '#',
          label: 'Portfolio Projects',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'documentation-tooling/intro',
              label: 'Documentation Tooling',
            },
            {
              type: 'doc',
              docId: 'api-documentation/intro',
              label: 'API Documentation',
            },
            {
              type: 'doc',
              docId: 'docs-automation/intro',
              label: 'Docs Automation',
            },
            {
              type: 'doc',
              docId: 'ai-documentation/intro',
              label: 'AI Documentation',
            },
            {
              type: 'doc',
              docId: 'devops-cloud-documentation/overview',
              label: 'DevOps',
            },
            {
              type: 'doc',
              docId: 'web3/getting-started',
              label: 'Web3 Documentation',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.notion.so/Samuel-Benson-Portfolio-231a5f1c6be08076a43ac5a54ae36a04#231a5f1c6be0815cba76efed82a5ce6c',
          label: 'Notion Portfolio',
          position: 'right',
          className: 'button button--primary',
        },
        {
          href: 'https://github.com/Samuel-Benso/writetech-accelerator-portfolio-samuel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About Me',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/SamyD41082',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Samuel-Benso/writetech-accelerator-portfolio-samuel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built by Samuel Benson – WriteTech Accelerator Programme 2025`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
