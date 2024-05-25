import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "introduction",
    {
      type: "category",
      link: { type: "doc", id: "tutorials/index" },
      label: "튜토리얼",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials",
          className: "hidden",
        },
      ],
    },
    {
      type: "category",
      link: { type: "doc", id: "how_to/index" },
      label: "사용 가이드",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "how_to",
          className: "hidden",
        },
      ],
    },
    {
      type: "doc",
      id: "concepts",
      label: "개념 가이드",
      className: "concepts",
    },
    {
      type: "category",
      label: "생태계",
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
      label: "버전",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "versions",
        },
      ],
    },
    {
      type: "doc",
      id: "security",
      label: "보안",
      className: "security",
    },
  ],
};
export default sidebars;
