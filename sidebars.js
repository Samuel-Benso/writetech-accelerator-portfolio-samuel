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
              type: 'doc',
              id: 'documentation-tooling/jsonplaceholder-overview',
              label: 'JSONPlaceholder Overview',
            },
            {
              type: 'doc',
              id: 'documentation-tooling/getting-started',
              label: 'Getting Started',
            },
            {
              type: 'doc',
              id: 'documentation-tooling/api-reference/post',
              label: 'Create Post',
            },
            {
              type: 'doc',
              id: 'documentation-tooling/api-reference/get-user',
              label: 'Get User',
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
            {
              type: 'doc',
              id: 'api-documentation/getting-started',
              label: 'Getting Started',
            },
            {
              type: 'category',
              label: 'API Reference',
              items: [
                {
                  type: 'doc',
                  id: 'api-documentation/api-reference/chimoney/check-wallet-balance',
                  label: 'Check Wallet Balance',
                },
                {
                  type: 'doc',
                  id: 'api-documentation/api-reference/chimoney/send-money',
                  label: 'Send Money',
                },
                {
                  type: 'doc',
                  id: 'api-documentation/api-reference/chimoney/get-transaction-status',
                  label: 'Get Transaction Status',
                },
              ],
            },
            {
              type: 'doc',
              id: 'api-documentation/case-study',
              label: 'Case Study',
            },
          ],
        },
        // Documentation Automation
        {
          type: 'category',
          label: 'Documentation Automation',
          link: {
            type: 'doc',
            id: 'docs-automation/intro',
          },
          items: [
            {
              type: 'doc',
              id: 'docs-automation/intro',
              label: 'Introduction',
            },
            {
              type: 'category',
              label: 'API Documentation',
              link: {
                type: 'doc',
                id: 'docs-automation/api-documentation',
              },
              items: [
                'docs-automation/api-documentation',
                'docs-automation/case-study',
                {
                  type: 'link',
                  label: 'View OpenAPI Spec',
                  href: '/docs/docs-automation/openapi',
                }
              ]
            },
            {
              type: 'doc',
              id: 'docs-automation/case-study',
              label: 'Case Study',
            },
          ],
        },
        // AI Documentation
        {
          type: 'category',
          label: 'AI Documentation',
          items: [
            {
              type: 'doc',
              id: 'ai-documentation/intro',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'ai-documentation/model_card',
              label: 'Model Card',
            },
            {
              type: 'doc',
              id: 'ai-documentation/ai_output',
              label: 'AI Output',
            },
            {
              type: 'doc',
              id: 'ai-documentation/final_doc',
              label: 'Final Documentation',
            },
            {
              type: 'doc',
              id: 'ai-documentation/prompt_used',
              label: 'Prompts Used',
            },
            {
              type: 'doc',
              id: 'ai-documentation/reflection',
              label: 'Reflection',
            },
            {
              type: 'doc',
              id: 'ai-documentation/case-study',
              label: 'Case Study',
            },
          ],
        },
        // Web3 Documentation
        {
          type: 'category',
          label: 'Web3 Documentation',
          items: [
            {
              type: 'doc',
              id: 'web3-documentation/README',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'web3-documentation/getting-started',
              label: 'Getting Started',
            },
            {
              type: 'doc',
              id: 'web3-documentation/how-it-works',
              label: 'How It Works',
            },
            {
              type: 'doc',
              id: 'web3-documentation/example-interactions',
              label: 'Example Interactions',
            },
            {
              type: 'doc',
              id: 'web3-documentation/smart-contract-reference',
              label: 'Smart Contract Reference',
            },
          ],
        },
        // DevOps Cloud Documentation
        {
          type: 'category',
          label: 'DevOps Cloud Documentation',
          items: [
            {
              type: 'doc',
              id: 'devops-cloud-documentation/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'devops-cloud-documentation/case-study',
              label: 'Case Study',
            },
            {
              type: 'doc',
              id: 'devops-cloud-documentation/setup',
              label: 'Setup',
            },
            {
              type: 'doc',
              id: 'devops-cloud-documentation/step_by_step',
              label: 'Step by Step Guide',
            },
            {
              type: 'doc',
              id: 'devops-cloud-documentation/troubleshooting',
              label: 'Troubleshooting',
            },
            {
              type: 'doc',
              id: 'devops-cloud-documentation/collaboration',
              label: 'Collaboration',
            },
            {
              type: 'doc',
              id: 'devops-cloud-documentation/summary',
              label: 'Summary',
            },
          ],
        }
      ],
    }
  ]
};

module.exports = sidebars;