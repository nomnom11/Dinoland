"use client";
import { useState } from "react";

type Place = { name: string; icon: string; x: number; y: number; text: string; danger: number; reward: number };
const PLACES: Place[] = [
  { name: "Dino Valley", icon: "🌿", x: 20, y: 60, text: "A green valley where every explorer begins the journey.", danger: 1, reward: 2 },
  { name: "Ancient Forest", icon: "🌲", x: 42, y: 30, text: "An ancient forest full of hidden paths and rare creatures.", danger: 3, reward: 3 },
  { name: "Volcano Zone", icon: "🌋", x: 80, y: 25, text: "A land of lava with the toughest challenges and the biggest rewards.", danger: 5, reward: 5 },
  { name: "Crystal Cave", icon: "💠", x: 64, y: 62, text: "A glittering cave that hides treasure and rare items.", danger: 3, reward: 4 },
  { name: "Dino Village", icon: "🏠", x: 34, y: 80, text: "The hub where dinos gather, trade, and get ready.", danger: 1, reward: 3 },
  { name: "Lost Temple", icon: "🏛️", x: 86, y: 76, text: "An ancient temple with secrets no one has found yet.", danger: 4, reward: 5 },
];
const pips = (n: number) => "■".repeat(n) + "□".repeat(5 - n);

export default function WorldMap() {
  const [cur, setCur] = useState(0);
  const p = PLACES[cur];
  return (
    <section id="dinoland" style={{ background: "var(--bg2)" }}>
      <div className="wrap">
        <h2>DINOLAND WORLD</h2>
        <p className="sub">Select a location on the map to see its details.</p>
        <div className="map" id="map">
          {PLACES.map((pl, i) => (
            <button key={pl.name} type="button" className={`spot${i === cur ? " on" : ""}`} style={{ left: `${pl.x}%`, top: `${pl.y}%` }} onClick={() => setCur(i)}>
              <span>{pl.icon}</span>{pl.name}
            </button>
          ))}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="px mdino" src="/images/logo.png" alt="" style={{ left: `${p.x}%`, top: `${p.y - 9}%` }} />
        </div>
        <div className="chips">
          {PLACES.map((pl, i) => (
            <button key={pl.name} type="button" className={`chip${i === cur ? " on" : ""}`} onClick={() => setCur(i)}>{pl.icon} {pl.name}</button>
          ))}
        </div>
        <div className="box" id="info">
          <h3>{p.icon} {p.name}</h3>
          <p>{p.text}</p>
          <p className="pf" style={{ fontSize: 10, margin: "16px 0 8px" }}>DANGER <span style={{ color: "#ff6a5a", letterSpacing: 2 }}>{pips(p.danger)}</span></p>
          <p className="pf" style={{ fontSize: 10, margin: 0 }}>REWARD <span style={{ color: "var(--gold)", letterSpacing: 2 }}>{pips(p.reward)}</span></p>
        </div>
      </div>
    </section>
  );
}
