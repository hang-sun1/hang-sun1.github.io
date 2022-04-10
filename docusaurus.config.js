/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Portfolio',
  tagline: 'A React-based static github website template.',
  url: 'https://github.com',
  baseUrl: '/hang/',
  organizationName: 'hang-sun1', // Usually your GitHub org/user name.
  projectName: 'hang-sun1.github.io', // Usually your repo name.
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'More Info',
        },
        //{ to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/hang-sun1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Hang Sun',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/hang-sun1',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline',
            },
            {
              label: 'Linkedin',
              to: 'https://www.linkedin.com/in/hang-sun-629524236/',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'hang-sun1',
        path: '/hang/',
        pageTitle: 'My Site',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
