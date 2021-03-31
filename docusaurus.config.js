module.exports = {
  title: 'LAMP Platform',
  tagline: 'The LAMP Platform documentation.',
  url: 'https://docs.lamp.digital',
  favicon: './docs/assets/logo.png',
  organizationName: 'BIDMCDigitalPsychiatry',
  projectName: 'LAMP-platform',
  baseUrl: '/LAMP-platform/', // FIXME: CHANGE THIS ONCE CNAME IS CONFIGURED
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themeConfig: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    image: 'logo.png',
    navbar: {
      title: 'LAMP Platform',
      hideOnScroll: false,
      logo: {
        alt: 'LAMP Platform',
        src: 'logo.png',
      },
      items: [
        {
          label: 'User Guide',
          position: 'left',
          to: '/doc1',
          activeBaseRegex: '/([0-9a-zA-Z]+)',
          items: [
            {
              label: 'ABC',
              to: '/doc2',
            },
            {
              label: 'FAQ',
              to: '/doc3',
            },
          ],
        },
        {
          label: 'API',
          position: 'left',
          to: '/api',
        },
        {
          label: 'What\'s New',
          position: 'left',
          to: '/blog',
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Forum',
              href: 'https://mindlamp.discourse.group/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Contact',
              href: 'mailto:team@digitalpsych.org',
            },
          ],
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} LAMP Consortium & Division of Digital Psychiatry @ BIDMC`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-192736629-1'
        },
        docs: {
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true, 
          sidebarPath: require.resolve('./docs/sidebar.js'),
          editUrl:
            'https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/',
        },
        blog: {
          blogTitle: 'LAMP Platform',
          blogDescription: 'The LAMP Platform documentation.',
          blogSidebarTitle: 'All updates',
          feedOptions: {
            type: 'all',
            copyright: `© ${new Date().getFullYear()} LAMP Consortium & Division of Digital Psychiatry @ BIDMC`,
          }
        }
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: true, 
        indexPages: true,
        hashed: true
      }
    ],
    [
      require.resolve('docusaurus-plugin-openapi'),
      {
        routeBasePath: 'api',
        openapiPath: require.resolve('./docs/openapi.json'),
      }
    ]
  ]
}
