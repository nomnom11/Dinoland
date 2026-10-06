const PHASES = [
  ["PHASE 01", "The Beginning", ["DinoLand concept", "Website launch", "Community building", "Character reveal"]],
  ["PHASE 02", "Enter the World", ["Gameplay development", "Dino world expansion", "New characters", "Interactive locations"]],
  ["PHASE 03", "The Adventure", ["New game features", "Rewards", "Special events", "Community challenges"]],
  ["PHASE 04", "Beyond the Pixels", ["Major world expansion", "New adventures", "Multiplayer features", "Future ecosystem"]],
] as const;

export default function Roadmap() {
  return (
    <section id="roadmap" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <h2>ROADMAP</h2>
        <p className="sub">The DinoLand journey, one checkpoint at a time.</p>
        <div className="road">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="px walker" src="/images/logo.png" alt="" />
          {PHASES.map(([phase, title, items]) => (
            <div key={phase} className="ph box">
              <h3>{phase}</h3><h4>{title}</h4>
              <ul>{items.map((i) => (<li key={i}>{i}</li>))}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
