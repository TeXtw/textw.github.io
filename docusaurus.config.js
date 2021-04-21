/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '臺灣 TeX 使用者社群',
  tagline: "Taiwan TeX Users' Group (TEXTW/TWTUG)",
  url: 'https://textw.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'textw', // Usually your GitHub org/user name.
  projectName: 'textw.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TWTUG',
      logo: {
        alt: 'TWTUG Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '使用手冊',
        },
        { to: '/blog', label: '開源專案', position: 'left' },
        { to: '/blog', label: '活動資訊', position: 'left' },
        { to: '/blog', label: '文章', position: 'left' },
        {
          href: 'https://github.com/textw',
          position: 'right',
          className: 'header-github-link header-icon-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文件',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社群',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Telegram 交流群組',
              href: 'https://t.me/TWTUG',
            },
            {
              label: 'Telegram 社群頻道',
              href: 'https://t.me/TWTUC',
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
              href: 'https://github.com/textw',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TWTUG, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
