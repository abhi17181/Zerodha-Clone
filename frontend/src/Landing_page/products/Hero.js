import React from "react";

function Hero() {
    return (
        <div className="container py-5 mt-5 border-bottom">

            {/* Top Heading Section */}
            <div className="text-center mb-5">
                <h1 className="fw-semibold" style={{ fontSize: "2.8rem" }}>
                    Zerodha Products
                </h1>

                <p className="text-muted mt-3 fs-5">
                    Sleek, modern, and intuitive trading platforms
                </p>

                <p>
                    Check out our{" "}
                    <a href="#" className="text-decoration-none fw-medium">
                        investment offerings <i className="fa fa-long-arrow-right"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
