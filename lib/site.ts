export const siteConfig = {
  name: "SafarSafe",
  title: "SafarSafe | Safer journeys, smarter travel",
  description:
    "SafarSafe is building trusted digital safety experiences for modern travelers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://safarsafe.com",
  // TODO(assets): currently points at the official logo. For a proper
  // social share card add a 1200x630 export at /images/logo/og.png.
  ogImage: "/images/logo/safarsafe-logo.png",
  links: {
    instagram: "https://www.instagram.com/safarsafe",
  },
} as const;
