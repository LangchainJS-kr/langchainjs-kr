import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "Introduction",
      label: "Introduction",
      className: "Introduction",
    },
    {
      type: "doc",
      id: "tutorials",
      label: "tutorials",
      className: "tutorials",
    },
    {
      type: "doc",
      id: "how-to-guides",
      label: "how-to-guides",
      className: "how-to-guides",
    },
    {
      type: "doc",
      id: "concepts",
      label: "concepts",
      className: "concepts",
    },
    {
      type: "category",
      label: "Ecosystem",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "link",
          href: "https://docs.smith.langchain.com/",
          label: "🦜🛠️ LangSmith",
        },
        {
          type: "link",
          href: "https://langchain-ai.github.io/langgraphjs/",
          label: "🦜🕸️ LangGraph.js",
        },
      ],
    },
    {
      type: "category",
      label: "Versions",
      items: [
        {
          type: "doc",
          id: "overview",
          label: "overview",
        },
        {
          type: "doc",
          id: "v0_2",
          label: "v0.2",
        },
        {
          type: "doc",
          id: "release_policy",
          label: "Release Policy",
        },
        {
          type: "doc",
          id: "packages",
          label: "Packages",
        },
      ],
    },
    {
      type: "doc",
      id: "security",
      label: "security",
      className: "security",
    },
  ],
};
export default sidebars;
