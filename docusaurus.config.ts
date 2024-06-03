import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "🦜🔗 랭체인 자바스크립트",
  tagline: "by froggy1014",
  favicon: "img/favicon.ico",

  url: "https://langchainjs-kr.site",
  baseUrl: "/",
  projectName: "langchainjs-kr",
  organizationName: "froggy1014",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en"],
  // },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://langchainjs-kr.site",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "https://js.langchain.com/v0.2/img/brand/theme-image.png",
    navbar: {
      logo: {
        src: "img/brand/wordmark.png",
        srcDark: "img/brand/wordmark-dark.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "문서",
        },
        {
          href: "https://github.com/froggy1014/langchainjs-kr",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/introduction",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: {
        ...prismThemes.vsLight,
        
      },
      darkTheme: {
        ...prismThemes.vsDark,
        
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
