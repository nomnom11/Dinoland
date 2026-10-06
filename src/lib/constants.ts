export const SITE = {
  name: "DinoLand",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dinoland.vercel.app",
  x: process.env.NEXT_PUBLIC_X_URL || "https://x.com/DinoLandWorld",
  discord: process.env.NEXT_PUBLIC_DISCORD_URL || "#",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "#",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
  ca: process.env.NEXT_PUBLIC_TOKEN_CA || "",
  buy: process.env.NEXT_PUBLIC_BUY_URL || "",
  network: process.env.NEXT_PUBLIC_NETWORK || "[INSERT NETWORK]",
};

export const MENU = [
  ["HOME", "#home"], ["GAMEPLAY", "#gameplay"], ["DINOLAND", "#dinoland"], ["ABOUT", "#about"],
  ["ROADMAP", "#roadmap"], ["TOKENOMICS", "#tokenomics"], ["FAQ", "#faq"],
] as const;
