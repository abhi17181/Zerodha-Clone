import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-md-6 mt-5"  style={{ minHeight: "80vh"}} >
      <h4>
        404
      </h4>

      <h1 style={{ fontSize: "24px", fontWeight: "500"}}>
        Kiaan couldn’t find that page
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        We couldn’t find the page you were looking for.
      </p>

      <p style={{ fontSize: "18px" }}>
        Visit{" "}
        <Link 
          to="/" 
          className="text-decoration-none"
          style={{ color: "#387ed1" }}
        >
          Zerodha’s home page
        </Link>
      </p>
      </div>
      <div className="col mt-5">
        <img src="Media/images/kiaan404.jpg"/>
      </div>
      </div>

    </div>
  );
}

export default NotFound;
