import { SITE } from "@/lib/constants";

const LINKS = [["Home", "#home"], ["Gameplay", "#gameplay"], ["About", "#about"], ["Roadmap", "#roadmap"], ["Tokenomics", "#tokenomics"], ["FAQ", "#faq"]];
const SOCIALS = [["X", "X (Twitter) @DinoLandWorld", SITE.x], ["DC", "Discord", SITE.discord], ["TG", "Telegram", SITE.telegram], ["GH", "GitHub", SITE.github]];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <a className="logo" href="#home"><img className="px" src="/images/logo.png" alt="" />DinoLand</a>
          <p className="pf" style={{ fontSize: 10, color: "var(--gold)", marginTop: 14 }}>Enter the Pixel Jurassic.</p>
        </div>
        <ul>{LINKS.map(([l, h]) => (<li key={h}><a href={h}>{l}</a></li>))}</ul>
        <div className="soc">
          {SOCIALS.map(([short, label, href]) => (
            <a key={short} href={href} aria-label={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{short}</a>
          ))}
        </div>
      </div>
      <div id="fw">
        {[0, 1, 2].map((i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} className="px fw" src="/images/logo.png" alt="" style={{ animationDuration: `${22 + i * 8}s`, animationDelay: `-${i * 9}s` }} />
        ))}
      </div>
    </footer>
  );
}
