"use client";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/constants";

const ALLOC: [string, number][] = [["Community", 30], ["Ecosystem", 20], ["Rewards", 20], ["Development", 15], ["Liquidity", 15]];

export default function Tokenomics() {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); io.disconnect(); } });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const copy = () => {
    navigator.clipboard?.writeText(SITE.ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="tokenomics">
      <div className="wrap">
        <h2>TOKENOMICS</h2>
        <p className="sub">DinoLand token allocation.</p>
        <div className="tk">
          <div className="box"><small>TOKEN NAME</small><b>DinoLand</b></div>
          <div className="box"><small>SYMBOL</small><b>$DINO</b></div>
          <div className="box"><small>NETWORK</small><b>{SITE.network}</b></div>
        </div>
        <div className="box" id="bars" ref={ref}>
          {ALLOC.map(([name, pct]) => (
            <div className="bar" key={name}>
              <div><span>{name}</span><span>{pct}%</span></div>
              <i><s style={{ width: go ? `${pct * 3}%` : 0 }} /></i>
            </div>
          ))}
        </div>
        <div className="box" id="buy" style={{ marginTop: 28, textAlign: "center", scrollMarginTop: 90 }}>
          <h3 style={{ fontSize: "clamp(14px,3vw,20px)", color: "var(--gold)" }}>BUY $DINO</h3>
          <p style={{ margin: "14px auto 20px", maxWidth: "52ch" }}>The contract address and official buy links will be posted here and on our X account. Do not trust any other address.</p>
          <div className="ca">
            <span className="pf" style={{ fontSize: 10, color: "var(--gold)" }}>CA</span>
            <code id="ca">{SITE.ca || "COMING SOON"}</code>
            <button className="btn alt" id="cc" disabled={!SITE.ca} onClick={copy}>{copied ? "COPIED!" : "COPY"}</button>
          </div>
          <div className="cta" style={{ justifyContent: "center" }}>
            {SITE.buy ? (
              <a className="btn" href={SITE.buy} target="_blank" rel="noopener noreferrer">BUY $DINO</a>
            ) : (
              <a className="btn" aria-disabled="true" style={{ opacity: 0.6, cursor: "not-allowed" }}>BUY $DINO · SOON</a>
            )}
            <a className="btn alt" href={SITE.x} target="_blank" rel="noopener noreferrer">FOLLOW @DinoLandWorld</a>
          </div>
        </div>
      </div>
    </section>
  );
}
