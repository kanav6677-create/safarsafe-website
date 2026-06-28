export const siteConfig = {
  name: "SafarSafe",
  title: "SafarSafe | Safer journeys, smarter travel",
  description:
    "SafarSafe is building trusted digital safety experiences for modern travelers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://safarsafe.com",
  ogImage: "/images/logo/og.png",
  links: {
    instagram: "https://www.instagram.com/safarsafe",
  },
} as const;
