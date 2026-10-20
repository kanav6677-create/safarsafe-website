export const siteConfig = {
  name: "SafarSafe",
  title: "SafarSafe | Safer journeys, smarter travel",
  description:
    "SafarSafe is building trusted digital safety experiences for modern travelers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://safarsafe.com",
  // TODO(assets): for a proper social share card add a 1200x630 PNG at
  // /images/logo/og.png and point ogImage there instead.
  ogImage: "/images/logo/safarsafe-logo.svg",
  links: {
    instagram: "https://www.instagram.com/safarsafe",
  },
} as const;
