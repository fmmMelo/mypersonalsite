/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Felipe Melo Moura | Personal HomePage',
  tagline: 'my personal homepage',
  url: 'https://fmmMelo.github.io',
  favicon: "favicon.ico",
  baseUrl: '/Personal-HomePage/',
  organizationName: 'fmmMelo', // Usually your GitHub org/user name.
  projectName: 'Personal HomePage', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Felipe',
      links: [
        {to: 'docs/into', label: 'Work', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fmmMelo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Contact',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/felipe-melo-a17b39196/',
            },
          ],
        },

        {
          title: 'Professional',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fmmMelo',
            },
          ],
        },

        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              to: 'blog',
            },
          ],

        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
