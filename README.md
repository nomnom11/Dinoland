# DinoLand

Pixel-art Web3 landing page + playable Dino Run mini-game. Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Copy `.env.example` to `.env.local` to set the X link, contract address (CA), buy link and network.
Deploy on Vercel or import into v0 as-is. Pixel images live in `public/images`; the game engine is `src/lib/dinoGame.ts`.
