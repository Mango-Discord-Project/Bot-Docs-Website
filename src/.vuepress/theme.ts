import { hopeTheme } from "vuepress-theme-hope";
import locales from "./theme/locales.js";
import type { Page } from "vuepress";

export default hopeTheme(
  {
    // # Basic
    hostname: "discord-bot.ytmango.uk",
    author: {
      name: "MangoJellyPudding",
      url: "https://discord-bot.ytmango.uk",
    },
    license: "AGPL-3.0",
    favicon: "/logo.png",
    // hotReload: true, // enable it to preview all changes in time
    locales,

    // # Feature
    blog: {
      name: "芒果凍布丁",
      avatar: "https://avatars.githubusercontent.com/u/74277414",
      description: "喜歡玩 Discord 機器人的芒果凍布丁",
      // medias: {
      //   Github: "https://github.com/EvanHsieh0415/",
      // },
      // timeline: "今日 Discord",
      // articlePerPage: 10,
      // articleInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],
    },
    encrypt: {
      config: {},
    },

    // # Layouts
    // - Navbar
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"],
    },
    logo: "/logo.svg",
    repo: "Mango-Discord-Project/Discord-Bot-Documentation",
    repoDisplay: true,
    repoLabel: "GitHub",

    // - Sidebar
    sidebarSorter: ["readme", "order", "filename", "title", "date", "date-desc"],
    // headerDepth: 2,

    // - Metadata
    lastUpdated: true,
    contributors: true,
    editLink: true,
    docsRepo: "Mango-Discord-Project/Discord-Bot-Documentation",
    docsBranch: "main",
    docsDir: "src",

    // - Footer
    copyright: `Copyright © ${new Date().getUTCFullYear()} MangoJellyPudding`,
    displayFooter: true,

    // - misc
    toc: true,

    // # Appearance
    darkmode: "enable",
    externalLinkIcon: false,
    fullscreen: true,
    pure: true,
    focus: false,
    print: true,

    // i18n
    blogLocales: {
      empty: "",
    },

    // # Markdown
    markdown: {
      // - behavior
      gfm: true,
      vPre: true,
      breaks: true,
      linkify: true,
      figure: true,
      imgLazyload: true,
      highlighter: {
        type: "shiki",

        langAlias: {
          "": "javascript",
          text: "javascript",
          plain: "javascript",
          plaintext: "javascript",
        },

        theme: "one-dark-pro",
        collapsedLines: false,
        notationDiff: true,
        notationFocus: true,
        notationHighlight: true,
        notationErrorLevel: true,
        notationWordHighlight: true,
        whitespace: "trailing",

        defaultLang: "javascript",
        logLevel: "silent",
      },
      linksCheck: true,

      // - grammar
      component: true,
      footnote: true,
      imgMark: true,
      imgSize: true,
      obsidianImgSize: true,
      include: true,
      tabs: true,
      tasklist: true,

      // - stylize
      align: true,
      attrs: true,
      mark: true,
      sup: true,
      sub: true,
      spoiler: true,
      // stylize: false,

      // - chart
      plantuml: true,

      // - code
      codeTabs: true,
      preview: true,
      demo: true,

      alert: true,
      hint: true,

      mermaid: true,
    },

    plugins: {
      blog: {
        
      },

      components: {
        components: ["Badge", "VPCard", "VidStack", "SiteInfo", "VPBanner"],
      },

      icon: {
        prefix: "fa6-solid:",
      },

      slimsearch: {
        indexContent: false,
        suggestion: true,

        customFields: [
          {
            getter: (page: Page) =>
              (<string[]>page.frontmatter.tags ?? []).concat(<string[]>page.frontmatter.categories ?? []),
          },
        ],
        locales: {
          "/zh-tw/": {
            placeholder: "搜尋",
          },
        },
      },

      git: {
        changelog: true,
      },

      redirect: {},
    },
  },
  {
    custom: true,
  },
);
