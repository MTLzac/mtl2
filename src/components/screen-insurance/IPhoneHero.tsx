import "./iphone-hero.css";

export function IPhoneHero() {
  return (
    <div className="iphone-scene">
      <div className="phone">
        {/* Side buttons */}
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

        {/* Front camera */}
        <div className="camera" />

        {/* Screen */}
        <div className="screen-container">
          {/* Wallpaper */}
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
          <div className="notch-container" tabIndex={0}>
            <div className="notch">
              <div className="content">
                <div className="left">
                  <div className="tile" />
                  <div className="text" />
                </div>
                <div className="right" />
                <div className="bar">
                  <div className="duration" />
                </div>
              </div>
            </div>
          </div>
          <div className="notch-blur" />

          {/* App grid */}
          <div className="screen">
            <div className="app">
              <div className="weather" />
            </div>
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
