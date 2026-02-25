import { useState, useEffect } from "react";
import "./iphone-hero.css";

export function IPhoneHero() {
  const [notifState, setNotifState] = useState<"idle" | "expanding" | "visible" | "collapsing">("idle");

  useEffect(() => {
    const t1 = setTimeout(() => setNotifState("expanding"), 1000);
    const t2 = setTimeout(() => setNotifState("visible"), 1350);
    const t3 = setTimeout(() => setNotifState("collapsing"), 4350);
    const t4 = setTimeout(() => setNotifState("idle"), 4700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const isOpen = notifState === "expanding" || notifState === "visible";

  return (
    <div className="iphone-scene">
      <div className="phone">
        <div className="buttons">
          <div className="left">
            <div className="button" />
            <div className="button" />
            <div className="button" />
          </div>
          <div className="right">
            <div className="button" />
          </div>
        </div>

        <div className="camera" />

        <div className="screen-container">
          <div className="bg">
            <div className="wallpaper">
              <div className="section">
                <div className="glow" />
              </div>
              <div className="section">
                <div className="glow" />
              </div>
            </div>
          </div>

          {/* Dynamic Island */}
          <div
            className={`notch-container ${isOpen ? "notif-open" : ""} ${notifState === "collapsing" ? "notif-closing" : ""}`}
            tabIndex={0}
          >
            <div className="notch">
              <div className="content">
                {/* Default content */}
                <div className="left">
                  <div className="tile" />
                  <div className="text" />
                </div>
                <div className="right" />
                <div className="bar">
                  <div className="duration" />
                </div>
              </div>

              {/* iMessage notification overlay */}
              <div className={`notif-overlay ${isOpen ? "notif-visible" : ""}`}>
                <div className="notif-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2C6.48 2 2 5.79 2 10.5c0 2.72 1.63 5.13 4.12 6.67L5 22l4.2-2.52c.9.17 1.83.27 2.8.27 5.52 0 10-3.79 10-8.25S17.52 2 12 2z" />
                  </svg>
                </div>
                <div className="notif-body">
                  <div className="notif-app">iMESSAGE</div>
                  <div className="notif-sender">Mobile Tech Lab</div>
                  <div className="notif-msg">Your screen is now 100% protected! ✅</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`notch-blur ${isOpen ? "notif-blur-open" : ""}`} />

          <div className="screen">
            <div className="app"><div className="weather" /></div>
            <div className="app" />
            <div className="app" />
            <div className="app" />
            <div className="app" />
            <div className="app" />
            <div className="app" />
            <div className="app" />
            <div className="app" />
            <div className="app" />
          </div>
        </div>
      </div>
    </div>
  );
}
