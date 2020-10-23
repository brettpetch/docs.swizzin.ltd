module.exports = {
  title: "swizzin community edition",
  tagline: "An all-in-one modular seedbox solution",
  url: "https://swizzin.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "liaralabs", // Usually your GitHub org/user name.
  projectName: "docs.swizzin.ltd", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/logo.png",
    navbar: {
      hideOnScroll: false,
      title: "swizzin",
      logo: {
        alt: "swizzin Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/liaralabs/swizzin",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      logo: {
            alt: 'swizzin Logo',
            src: 'img/logo-sm.png',
            href: 'https://swizzin.ltd',
          },
      links: [
        {
          title: "swizzin",
          items: [
            {
              label: "Getting Started",
              to: "docs/installation",
            },
            {
              label: "Box Basics",
              to: "docs/applications/box-basics",
            },
            {
              label: "Privacy Policy",
              to: "docs/policies/privacy",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/liaralabs/swizzin",
            },
            {
              label: "Discord",
              href: "https://discord.gg/2esbu2N",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} swizzin. All rights reserved.`,
    },
    googleAnalytics: {
      trackingID: "zz",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: "zz",
      indexName: "swizzin",
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/liaralabs/docs.swizzin.ltd/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/liaralabs/docs.swizzin.ltd/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};