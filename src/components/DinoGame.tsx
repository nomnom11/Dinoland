"use client";
import { useEffect } from "react";
import { initDinoGame } from "@/lib/dinoGame";

export default function DinoGame() {
  useEffect(() => initDinoGame(), []);
  return (
    <div className="arena" id="arena">
      <div className="hud">
        <span>SCORE <b id="sc">0</b></span><span>COIN <b id="co">0</b></span><span>BEST <b id="bs">0</b></span>
        <span className="gap" />
        <button id="mu" aria-label="Sound">🔊</button><button id="pa" aria-label="Pause">⏸</button>
      </div>
      <div className="cv"><canvas id="g" width={400} height={150} /><div id="ov" /></div>
      <div className="pad"><button className="btn" id="bj">JUMP</button><button className="btn alt" id="bd">DUCK</button></div>
      <p className="sub" style={{ margin: "14px 0 0", fontSize: 13 }}>
        Space / ↑ / W / tap = jump (a full spin in the air = kickflip +5). ↓ / S = duck (dodge the pterodactyls). P = pause, M = sound. Collect coins for bonus score.
      </p>
    </div>
  );
}
