import { useState } from "react";
import "./Signup.css";

// ── Small reusable components ──────────────────────────────

const DonutChart = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="28" fill="none" stroke="#e8e8e8" strokeWidth="14" />
    <circle cx="40" cy="40" r="28" fill="none" stroke="#387ed1" strokeWidth="14"
      strokeDasharray="88 88" strokeDashoffset="22" transform="rotate(-90 40 40)" />
    <circle cx="40" cy="40" r="28" fill="none" stroke="#f0a500" strokeWidth="14"
      strokeDasharray="44 132" strokeDashoffset="-66" transform="rotate(-90 40 40)" />
    <text x="40" y="44" textAnchor="middle" fontSize="8" fill="#555">Mutual</text>
    <text x="40" y="53" textAnchor="middle" fontSize="8" fill="#555">funds</text>
  </svg>
);

const KiteCard = () => (
  <div className="card kite-card">
    <div className="kite-header">
      <span className="kite-icon">◀</span>
      <strong>Kite</strong>
    </div>
    <p className="kite-tagline">Ultra-fast investing platform</p>
    <div className="index-row">
      <span className="index-label">NIFTY 50</span>
      <div className="index-bar"><div className="index-bar-fill" style={{ width: "60%" }} /></div>
      <span className="index-label">SENSEX</span>
      <div className="index-bar"><div className="index-bar-fill" style={{ width: "45%" }} /></div>
    </div>
  </div>
);

const ConsoleCard = () => (
  <div className="card console-card">
    <div className="console-tabs">
      <span className="tab-inactive">Reports and analytics</span>
      <span className="tab-active">console</span>
    </div>
    <p className="console-label">Account value</p>
    <p className="console-value">₹ 4.33L</p>
    <div className="donut-wrapper">
      <DonutChart />
      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: "#387ed1" }} />
          <span className="legend-text">Equity holdings</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: "#f0a500" }} />
          <span className="legend-text">Mutual funds</span>
        </div>
      </div>
    </div>
    <p className="holdings-label">Holdings</p>
    <div className="holdings-bars">
      <div className="holdings-bar" style={{ width: "55%", background: "#387ed1" }} />
      <div className="holdings-bar" style={{ width: "25%", background: "#48c774" }} />
      <div className="holdings-bar" style={{ width: "12%", background: "#f0a500" }} />
    </div>
  </div>
);

const PortfolioCard = () => (
  <div className="card portfolio-card">
    <div className="portfolio-tabs">
      {["Portfolio", "SIPs", "Orders"].map((t) => (
        <span key={t} className={t === "Portfolio" ? "ptab-active" : "ptab"}>{t}</span>
      ))}
    </div>
    <div className="portfolio-links">
      {["Overview", "P&L", "XIRR"].map((l) => (
        <span key={l} className="pt-link">{l}</span>
      ))}
    </div>
    <div className="pt-rows">
      {[80, 60, 45, 30].map((w, i) => (
        <div key={i} className="pt-row" style={{ width: `${w}%`, opacity: 1 - i * 0.15 }} />
      ))}
    </div>
    <div className="pt-footer">
      <span className="pt-footer-label">Invested</span>
      <span className="pt-footer-label">Current</span>
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="mockup-wrapper">
    <KiteCard />
    <ConsoleCard />
    <PortfolioCard />
    <div className="coin-badge">
      <div className="coin-icon">coin</div>
      <span className="coin-text">Direct mutual funds<br />at 0% commission</span>
    </div>
    <div className="hi-bubble">Hi ....</div>
    <div className="equity-tabs">
      <span className="etab-active">Equity</span>
      <span className="etab">Commodity</span>
    </div>
  </div>
);

// ── Main Signup Component ──────────────────────────────────

const Signup = () => {
  const [phone, setPhone]     = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
    if (error) setError("");
    if (otpSent) setOtpSent(false);
  };

  const handleGetOTP = () => {
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); setOtpSent(true); }, 1500);
  };

  return (
    <div className="signup-page">

      {/* Hero Heading */}
      <div className="hero-text">
        <h1 className="hero-heading">Open a free demat and trading account online</h1>
        <p className="hero-subheading">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="hero">

        {/* Left — Dashboard Mockup */}
        <DashboardMockup />

        {/* Right — Signup Form */}
        <div className="form-side">
          <h1 className="signup-title">Signup now</h1>
          <p className="signup-sub">Or track your existing application</p>

          {/* Phone Input */}
          <div className={`phone-wrapper ${error ? "error" : ""}`}>
            <div className="flag-box">
              <span>🇮🇳</span>
              <span className="country-code">+91</span>
            </div>
            <input
              type="tel"
              className="phone-input"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          {error    && <p className="error-text">{error}</p>}
          {otpSent  && <p className="success-text">✓ OTP sent to +91 {phone}</p>}

          <button className="otp-btn" onClick={handleGetOTP} disabled={loading}>
            {loading ? "Sending OTP..." : "Get OTP"}
          </button>

          <p className="terms-text">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" className="link">terms</a> &amp; <a href="#" className="link">privacy policy</a>
          </p>

          <p className="nri-text">
            Looking to open NRI account? <a href="#" className="link-bold">Click here</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;