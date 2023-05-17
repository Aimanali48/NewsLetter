import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import { useCountryContext } from "../context/countryContext";
import "../../App.css";

const Landing = () => {
  const [data, setData] = useState(null);
  const { country } = useCountryContext();

  useEffect(() => {
    fetch("https://newsapi.org/docs/endpoints/top-headlines", {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <div className="container-fluid d-none d-lg-block">
        <div className="container-fluid p-0">
          <Header />
        </div>

        <div className="container-fluid pt-5 mb-3">
          <div className="container">
            <div className="section-title">
              <h4 className="m-0 text-uppercase font-weight-bold">
                Top News From {country}
              </h4>
            </div>

            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
