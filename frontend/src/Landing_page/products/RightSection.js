import React from "react";
function RightSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
}) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">

                <div className="col-5 p-5" style={{ paddingTop: "60px" }}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <div className="col-2"></div>

                        {/* Try Demo link */}
                        {tryDemo && (
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#387ed1",
                                    fontWeight: "500"
                                }}
                            >
                                {tryDemo} →
                            </a>
                        )}

                        {/* Learn More link */}
                        {learnMore && (
                            <a
                                href="#"
                                style={{
                                    marginLeft: "50px",
                                    textDecoration: "none",
                                    color: "#387ed1",
                                    fontWeight: "500"
                                }}
                            >
                                {learnMore} →
                            </a>
                        )}

                    </div>
                </div>
                <div className="col-5 p-5">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
