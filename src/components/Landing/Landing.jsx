import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import { useCountryContext } from "../context/countryContext";
import { mockData } from "../../static/mock";
import "../../App.css";

const Landing = () => {
  const { country } = useCountryContext();
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  // useEffect(() => {
  //   axios
  //     .get("MOCK_DATA.json")
  //     .then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       alert("There was an error while retrieving the data");
  //     });
  // }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = mockData.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(mockData.length / recordsPerPage);

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

            <Card currentRecords={currentRecords} />
          </div>
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default Landing;
