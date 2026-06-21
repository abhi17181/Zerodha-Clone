import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 p-5">
                    <img src={imageURL}/>
                </div>
                <div className="col-2"></div>
                <div className="col-5 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>

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

                    <div className="mt-3">
                    <a href={googlePlay}><img src="Media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="Media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
