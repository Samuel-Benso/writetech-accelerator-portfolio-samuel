// @ts-check

/** @type {import('redocusaurus').PresetEntry} */
const redocusaurus = [
  'redocusaurus',
  {
    specs: [
      {
        spec: 'docs/api-documentation/api-reference/chimoney/chimoney-spec.yaml',
        route: '/api/',
      },
    ],
    theme: {
      primaryColor: '#1DB954', // Spotify green to match your theme
      redocOptions: {
        hideDownloadButton: false,
        disableSearch: false,
        expandResponses: '200,201',
        expandSingleSchemaField: true,
        jsonSampleExpandLevel: 5,
        sortPropsAlphabetically: true,
        hideLoading: false,
        nativeScrollbars: true,
        noAutoAuth: true,
        onlyRequiredInSamples: false,
        pathInMiddlePanel: true,
        requiredPropsFirst: true,
        scrollYOffset: 60,
        showExtensions: true,
        sortPropsAlphabetically: true,
        theme: {
          colors: {
            primary: {
              main: '#1DB954', // Spotify green
            },
            http: {
              get: '#61affe',
              post: '#49cc90',
              put: '#fca130',
              delete: '#f93e3e',
            },
          },
        },
      },
    },
  },
];

module.exports = redocusaurus;
