import DinoGame from "./DinoGame";

const CARDS = [
  ["🧭", "EXPLORE", "Explore a massive pixel-art prehistoric world filled with secrets and hidden locations."],
  ["💎", "COLLECT", "Discover rare items, treasures, characters, and rewards."],
  ["⚔️", "SURVIVE", "Face challenges, enemies, and dangerous environments."],
  ["🏆", "EARN", "Complete gameplay activities and unlock special rewards."],
];

export default function Gameplay() {
  return (
    <section id="gameplay">
      <div className="wrap">
        <h2>GAMEPLAY</h2>
        <p className="sub">Adventure awaits beyond every pixel.</p>
        <DinoGame />
        <div className="cards">
          {CARDS.map(([icon, title, text]) => (
            <div key={title} className="box card"><div className="ico">{icon}</div><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
