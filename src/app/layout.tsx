import type { Metadata, Viewport } from "next";
import { Press_Start_2P, DM_Sans } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description = "DinoLand is a pixel-art prehistoric adventure universe. Explore, collect, survive and earn. Enter the Pixel Jurassic.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  other: {
    "virtual-protocol-site-verification": "d1e744da58dc5e5d841f1a74c7a7b079",
  },
  title: "DinoLand — Enter the Pixel Jurassic",
  description,
  keywords: ["DinoLand", "$DINO", "pixel art", "crypto game", "web3 game", "dinosaur"],
  openGraph: { title: "DinoLand — Enter the Pixel Jurassic", description, type: "website", images: ["/images/dino.png"] },
  twitter: { card: "summary", title: "DinoLand", description, creator: "@DinoLandWorld", images: ["/images/dino.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0b1a12" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
