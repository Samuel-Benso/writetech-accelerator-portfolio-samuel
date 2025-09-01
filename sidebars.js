// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  profileSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'intro',
    }
  ],

  toolingSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'documentation-tooling/intro',
    },
    {
      type: 'category',
      label: 'JSONPlaceholder',
      link: {
        type: 'doc',
        id: 'documentation-tooling/jsonplaceholder-overview'
      },
      items: [
        'documentation-tooling/getting-started',
        {
          type: 'category',
          label: 'API Reference',
          items: [
            'documentation-tooling/api-reference/get-user',
            'documentation-tooling/api-reference/post',
          ],
        }
      ],
    },
  ],

  // This is the section for Chimoney API docs.
  apiSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'api-documentation/intro',
    },
    {
      type: 'category',
      label: 'Chimoney API',
      link: {
        type: 'doc',
        id: 'api-documentation/getting-started',
      },
      items: [
        // Manually list the files you want to include
        'api-documentation/getting-started',
        {
          type: 'category',
          label: 'API Reference',
          items: [
            'api-documentation/api-reference/chimoney/check-wallet-balance',
            'api-documentation/api-reference/chimoney/send-money',
            'api-documentation/api-reference/chimoney/get-transaction-status',
          ],
        },
      ],
    },
  ],
// The Linter Tab
linterSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'docs-automation/intro',
    },
    {
      type: 'link',
      href: '/api-docs.html',
      label: 'Redocly API Reference',
    },
  ],
// This tab ends here
};

module.exports = sidebars;