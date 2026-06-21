import React from "react";

function Pricing() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px"
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: "1" }}>
          <h1 style={{ marginBottom: "16px", fontSize: "32px" }}>
            Unbeatable pricing
          </h1>

          <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "16px" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "#387ed1"
            }}
          >
            See pricing{" "}
            <i
              className="fa fa-long-arrow-right"
              style={{ marginLeft: "6px" }}
            ></i>
          </a>
        </div>

        {/* RIGHT ICONS */}
        <div
          style={{
            flex: "1.3",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center"
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              src="Media/images/pricing-eq.svg"
              alt="Free account opening"
              style={{ height: "70px", marginBottom: "10px" }}
            />
            <p style={{ color: "#666", fontSize: "14px" }}>
              Free account opening
            </p>
          </div>

          <div style={{ width: "30%" }}>
            <img
              src="Media/images/pricing-eq.svg"
              alt="Free equity delivery"
              style={{ height: "70px", marginBottom: "10px" }}
            />
            <p style={{ color: "#666", fontSize: "14px" }}>
              Free equity delivery and direct mutual funds
            </p>
          </div>

          <div style={{ width: "30%" }}>
            <img
              src="Media/images/intradayTrades.svg"
              alt="Intraday and F&O"
              style={{ height: "70px", marginBottom: "10px" }}
            />
            <p style={{ color: "#666", fontSize: "14px" }}>
              Intraday and F&amp;O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
