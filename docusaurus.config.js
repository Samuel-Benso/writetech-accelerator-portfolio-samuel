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
          docItemComponent: '@theme/ApiItem', // 🔑 Required for OpenAPI theme
          editUrl:
            'https://github.com/WriteTech-Hub/writetech-accelerator-portfolio-zainab',
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
            // 👇 point to your spec (already correct)
            specPath: 'docs/api-documentation/api-reference/chimoney-spec.yaml',
            // 👇 generate into the chimoney folder
            outputDir: 'docs/api-documentation/api-reference/chimoney',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
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
          type: 'docSidebar',
          sidebarId: 'profileSidebar',
          position: 'left',
          label: 'About Me',
        },
        {
          type: 'dropdown',
          label: 'Portfolio Projects',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'toolingSidebar',
              label: '📚 Documentation Tooling',
            },
            {
              type: 'docSidebar',
              sidebarId: 'apiSidebar',
              label: '🔌 Chimoney API Docs',
            },
            {
              type: 'docSidebar',
              sidebarId: 'linterSidebar',
              label: '🔧 Documentation Automation',
            },
          ],
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
