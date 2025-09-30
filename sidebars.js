// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar for the documentation
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Portfolio Projects',
      collapsible: true,
      collapsed: true,
      items: [
        // Documentation Tooling
        {
          type: 'category',
          label: 'Documentation Tooling',
          link: {
            type: 'doc',
            id: 'documentation-tooling/intro',
          },
          items: [
            {
              type: 'category',
              label: 'JSONPlaceholder',
              items: [
                'documentation-tooling/jsonplaceholder-overview',
                'documentation-tooling/getting-started',
              ],
            },
          ],
        },
        // API Documentation
        {
          type: 'category',
          label: 'Chimoney API',
          link: {
            type: 'doc',
            id: 'api-documentation/intro',
          },
          items: [
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
        // Documentation Automation
        {
          type: 'category',
          label: 'Documentation Automation',
          items: [
            'docs-automation/intro',
          ],
        },
        // AI Documentation
        {
          type: 'category',
          label: 'AI Documentation',
          items: [
            'ai-documentation/intro',
            'ai-documentation/model_card',
            'ai-documentation/ai_output',
            'ai-documentation/final_doc',
            'ai-documentation/prompt_used',
            'ai-documentation/reflection',
          ],
        },
        // DevOps Cloud Documentation
        {
          type: 'category',
          label: 'DevOps Cloud Documentation',
          items: [
            'devops-cloud-documentation/overview',
            'devops-cloud-documentation/setup',
            'devops-cloud-documentation/step_by_step',
            'devops-cloud-documentation/troubleshooting',
            'devops-cloud-documentation/collaboration',
            'devops-cloud-documentation/summary',
            'devops-cloud-documentation/reflection',
            'devops-cloud-documentation/README',
          ],
        },
        // Web3 Documentation
        {
          type: 'category',
          label: 'Web3 Documentation',
          items: [
            'web3/getting-started',
            'web3/how-it-works',
            'web3/smart-contract-reference',
            'web3/example-interactions',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;