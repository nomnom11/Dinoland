const FAQS = [
  ["What is DinoLand?", "DinoLand is a pixel-art dinosaur adventure universe where you explore, collect, and compete."],
  ["How do I start playing?", "Press Play Now, connect your wallet, and enter the world."],
  ["What can I do in DinoLand?", "Explore locations, collect items, survive challenges, and earn rewards."],
  ["Is DinoLand free to play?", "Details will be announced before launch."],
  ["How can I connect my wallet?", "Click Connect Wallet and choose an EVM wallet such as MetaMask."],
  ["What network does DinoLand use?", "The network will be announced soon."],
  ["How can I become part of the community?", "Join us on Discord, Telegram, and X."],
];

export default function FAQ() {
  return (
    <section id="faq" style={{ background: "var(--bg2)" }}>
      <div className="wrap" style={{ maxWidth: 800 }}>
        <h2>FAQ</h2>
        <p className="sub" />
        {FAQS.map(([q, a]) => (<details key={q} className="box"><summary>{q}</summary><p>{a}</p></details>))}
      </div>
    </section>
  );
}
