import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row py-5 align-items-start">

        {/* LEFT TEXT SECTION */}
        <div className="col-5 ps-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-5 fw-semibold mt-4">Customer-first always</h2>
          <p className="text-muted lh-lg">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker; contributing
            to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">No spam or gimmicks</h2>
          <p className="text-muted lh-lg">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="/" className="ms-1 text-primary text-decoration-none">
              Our philosophies.
            </a>
          </p>

          <h2 className="fs-5 fw-semibold mt-4">The Zerodha universe</h2>
          <p className="text-muted lh-lg">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">Do better with money</h2>
          <p className="text-muted lh-lg">
            With initiatives like
            <a href="/" className="ms-1 text-primary text-decoration-none">
              Nudge
            </a>{" "}
            and
            <a href="/" className="ms-1 text-primary text-decoration-none">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-7">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid"
          />

          <div className="text-center mt-4">
            <a href="/" className="mx-4 text-decoration-none">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="/" className="text-decoration-none"><i className="fa fa-long-arrow-right"></i>
              Try Kite demo 
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
