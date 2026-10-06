"use client";
import { useState } from "react";
import { MENU } from "@/lib/constants";
import WalletConnect from "./WalletConnect";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a className="logo" href="#home"><img className="px" src="/images/logo.png" alt="" /><span>DinoLand</span></a>
        <ul className={`menu${open ? " on" : ""}`} id="menu" onClick={() => setOpen(false)}>
          {MENU.map(([label, href]) => (<li key={href}><a href={href}>{label}</a></li>))}
        </ul>
        <div className="nav-r">
          <WalletConnect />
          <button className="btn alt" id="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
    </nav>
  );
}
