"use client";
import { useState } from "react";
import ProfilePanel from "./ProfilePanel";

declare global {
  interface Window { ethereum?: { request: (args: { method: string }) => Promise<string[]> } }
}
const WALLETS = ["MetaMask", "WalletConnect", "Coinbase Wallet", "Trust Wallet"];

export default function WalletConnect() {
  const [open, setOpen] = useState(false);
  const [addr, setAddr] = useState("");
  const [msg, setMsg] = useState("");

  async function connect(name: string) {
    setMsg("");
    try {
      if (!window.ethereum) {
        setMsg(`${name} was not detected. Install a wallet extension or open this site in your wallet's browser.`);
        return;
      }
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts[0]) { setAddr(accounts[0]); setOpen(false); }
    } catch {
      setMsg("Connection was cancelled.");
    }
  }

  return (
    <>
      <button className="btn" onClick={() => (addr ? setAddr("") : setOpen(true))}>
        {addr ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : "CONNECT WALLET"}
      </button>
      {addr && <ProfilePanel address={addr} onDisconnect={() => setAddr("")} />}
      {open && (
        <div id="modal" className="on" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="box">
            <h3 style={{ fontSize: 14, color: "var(--gold)" }}>CONNECT WALLET</h3>
            {WALLETS.map((w) => (
              <button key={w} className="btn alt w" onClick={() => connect(w)}>{w}</button>
            ))}
            {msg && <p style={{ fontSize: 13, margin: "14px 0 0" }}>{msg}</p>}
            <button className="btn w" style={{ marginTop: 20 }} onClick={() => setOpen(false)}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  );
}
