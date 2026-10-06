const STATS = [["10K+", "Explorers"], ["50+", "Adventures"], ["100+", "Discoveries"], ["∞", "Pixels"]];

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <h2>WELCOME TO DINOLAND</h2>
          <p className="sub">DinoLand is a pixel-powered adventure universe where classic gaming nostalgia meets a modern digital world. Explore, collect, compete, and discover a world built one pixel at a time.</p>
          <div className="stats">
            {STATS.map(([n, l]) => (<div key={l} className="box"><b>{n}</b>{l}</div>))}
          </div>
        </div>
        <div className="box" style={{ display: "grid", placeItems: "center", background: "linear-gradient(#1b2a4a,#d0743c)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="px" src="/images/dino.png" style={{ width: "min(380px,100%)" }} alt="DinoLand dino" />
        </div>
      </div>
    </section>
  );
}
