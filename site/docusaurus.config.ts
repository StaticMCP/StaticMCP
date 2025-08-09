import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'StaticMCP',
  future: {
    v4: true,
  },
  url: 'https://staticmcp.com',
  baseUrl: '/',
  organizationName: 'binhonglee',
  projectName: 'StaticMCP',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'StaticMCP',
      items: [
        {to: 'docs/rfc', label: 'RFC', position: 'left'},
        {to: 'docs/standard', label: 'Standard', position: 'left'},
        {to: 'docs/comparison', label: 'Alternatives', position: 'left'},
        {to: 'docs/bridge', label: 'Bridge', position: 'left'},
        {
          href: 'https://github.com/StaticMCP/StaticMCP',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} StaticMCP. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
