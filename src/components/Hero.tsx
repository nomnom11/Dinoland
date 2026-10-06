"use client";
import { useEffect, useState } from "react";

type Leaf = { l: number; d: number; dl: number; o: number };

export default function Hero() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  // Random values are generated after mount to avoid server/client hydration mismatches.
  useEffect(() => {
    setLeaves(Array.from({ length: 18 }, () => ({ l: Math.random() * 110, d: 8 + Math.random() * 8, dl: Math.random() * 10, o: 0.4 + Math.random() * 0.5 })));
  }, []);
  return (
    <header className="hero" id="home">
      <div id="fx">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="cloud" style={{ top: `${14 + i * 9}%`, animationDuration: `${60 + i * 25}s`, animationDelay: `-${i * 20}s` }} />
        ))}
        {leaves.map((v, i) => (
          <div key={i} className="leaf" style={{ left: `${v.l}%`, animationDuration: `${v.d}s`, animationDelay: `-${v.dl}s`, opacity: v.o }} />
        ))}
      </div>
      <div className="hills" />
      <div className="wrap">
        <div>
          <h1>DINOLAND</h1>
          <p className="tag">Enter the Pixel Jurassic.</p>
          <p>Explore a prehistoric pixel world, discover new adventures, and become part of the DinoLand universe.</p>
          <div className="cta">
            <a className="btn" href="#arena">PLAY NOW</a>
            <a className="btn alt" href="#dinoland">EXPLORE DINOLAND</a>
            <a className="btn" href="#buy" style={{ background: "var(--gold)", boxShadow: "inset -4px -4px 0 #c99a1c,inset 4px 4px 0 #fff0a0,5px 5px 0 var(--ink)" }}>BUY $DINO</a>
          </div>
        </div>
        <div className="stage">
          <div className="sun" />
          <div className="bubble">kickflip!</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="dino" className="px" src="/images/dino.png" alt="Green pixel-art dinosaur on a pink skateboard" />
        </div>
      </div>
    </header>
  );
}
