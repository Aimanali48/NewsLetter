import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/countryContext";

const Header = () => {
  const { setCountry } = useCountryContext();

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 display-4 text-uppercase text-primary">
          Biz<span className="text-white font-weight-normal">News</span>
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
        id="navbarCollapse"
      >
        <div className="navbar-nav mr-auto py-0">
          <Link to={`/`} className="nav-item nav-link ">
            Top News
          </Link>
          <Link to={`/`} className="nav-item nav-link">
            Categories
          </Link>
        </div>
        <div style={{ width: "100%", maxWidth: "300px" }}>
          <div className="navbar-nav mr-auto py-0">
            <a
              href="#"
              className="nav-item nav-link "
              onClick={() => setCountry("Great Britain")}
            >
              GB
            </a>
            <a
              href="#"
              className="nav-item nav-link"
              onClick={() => setCountry("United State")}
            >
              US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
