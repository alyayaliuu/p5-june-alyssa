export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "sea elephant?",
  description: "what are they?",
  navItems: [
    {
      label: "①",
      href: "/",
    },
    {
      label: "🦭",
      href: "/docs",
    },
    {
      label: "💭",
      href: "/pricing",
    },
    {
      label: "🌊",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};
