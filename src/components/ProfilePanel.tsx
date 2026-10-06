"use client";

import { ChangeEvent, useMemo, useState } from "react";

type ProfilePanelProps = {
  address: string;
  onDisconnect: () => void;
};

const POINT_ACTIONS = [
  ["EXPLORE THE MAP", "Visit a new DinoLand location", 25],
  ["PLAY DINO DASH", "Complete a run in the arena", 50],
  ["JOIN THE COMMUNITY", "Follow the latest expedition update", 15],
] as const;

export default function ProfilePanel({ address, onDisconnect }: ProfilePanelProps) {
  const [name, setName] = useState("Rex Ranger");
  const [bio, setBio] = useState("New explorer in the DinoLand wilds.");
  const [avatar, setAvatar] = useState("/images/logo.png");
  const [points, setPoints] = useState(120);
  const [completed, setCompleted] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const initials = useMemo(() => name.trim().slice(0, 2).toUpperCase() || "DR", [name]);

  function changeAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) setAvatar(URL.createObjectURL(file));
  }

  function saveProfile() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  function earnPoints(action: string, reward: number) {
    if (completed.includes(action)) return;
    setCompleted((current) => [...current, action]);
    setPoints((current) => current + reward);
  }

  return (
    <section className="profile-shell" aria-labelledby="profile-title">
      <div className="wrap">
        <div className="profile-heading">
          <div>
            <p className="eyebrow">WALLET CONNECTED</p>
            <h2 id="profile-title">YOUR RANGER PROFILE</h2>
            <p className="sub">Make your mark in DinoLand, then earn points as you explore.</p>
          </div>
          <button className="btn alt" onClick={onDisconnect}>DISCONNECT</button>
        </div>

        <div className="profile-grid">
          <div className="box profile-card">
            <div className="avatar-row">
              <div className="avatar-frame">
                {avatar ? <img src={avatar} alt="Profile avatar" /> : <span>{initials}</span>}
              </div>
              <div>
                <p className="eyebrow">RANGER ID</p>
                <code className="address">{address.slice(0, 8)}…{address.slice(-6)}</code>
                <label className="btn alt upload-btn">
                  CHANGE AVATAR
                  <input type="file" accept="image/png,image/jpeg,image/webp" onChange={changeAvatar} />
                </label>
              </div>
            </div>

            <div className="profile-fields">
              <label>
                DISPLAY NAME
                <input value={name} maxLength={24} onChange={(event) => setName(event.target.value)} />
              </label>
              <label>
                RANGER BIO
                <textarea value={bio} maxLength={100} rows={3} onChange={(event) => setBio(event.target.value)} />
              </label>
              <button className="btn" onClick={saveProfile}>{saved ? "PROFILE SAVED" : "SAVE DETAILS"}</button>
            </div>
          </div>

          <div className="box points-card">
            <div className="points-total"><span>DINOPI POINTS</span><strong>{points.toLocaleString()}</strong></div>
            <p>Complete expeditions to climb the leaderboard.</p>
            <div className="points-list">
              {POINT_ACTIONS.map(([action, description, reward]) => {
                const isComplete = completed.includes(action);
                return (
                  <button className={`point-task${isComplete ? " complete" : ""}`} key={action} disabled={isComplete} onClick={() => earnPoints(action, reward)}>
                    <span><b>{action}</b><small>{isComplete ? "COMPLETED" : description}</small></span>
                    <strong>{isComplete ? "✓" : `+${reward}`}</strong>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Profile data is intentionally kept in component state until the project connects a profile database.
// The wallet address remains the stable identity for wiring persistence later.
