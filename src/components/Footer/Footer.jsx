import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/countryContext";
const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-5 px-lg-5">
      <div
        className="collapse navbar-collapse justify-content-center px-0 px-lg-3"
        id="navbarCollapse"
      >
        <h5 className="m-0 text-primary text-center">
          <span className="text-white font-weight-normal">By</span> Aiman Ali
        </h5>
      </div>
      <br />
      <div
        className="collapse navbar-collapse justify-content-center px-0 px-lg-3"
        id="navbarCollapse"
      >
        <p className="m-0 text-primary text-center">
          <img src="https://i.ibb.co/Tw51Cz2/download-1.png" width="20px" />
          &nbsp;{" "}
          <a href="https://www.linkedin.com/in/aiman-ali-75a875165/">
            https://www.linkedin.com/in/aiman-ali-75a875165/
          </a>
        </p>
        &nbsp; &nbsp;{" "}
        <p className="m-0 text-primary text-center">
          <img
            src="https://i.ibb.co/JqXwx8t/png-transparent-github-computer-icons-github-logo-monochrome-head.png"
            width="20px"
          />
          &nbsp;{" "}
          <a href="https://github.com/Aimanali48">
            https://github.com/Aimanali48
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Footer;
