import React, { useState } from "react";
import { mockData } from "../../static/mock";
import { Link } from "react-router-dom";
import "../../App.css";

const Card = () => {
  const [search, setSearch] = useState(null);

  const bySearch = (data, search) => {
    if (search) {
      return data.title.toLowerCase().includes(search.toLowerCase());
    } else return data;
  };

  const filteredList = (news, search) => {
    return news.filter((data) => bySearch(data, search));
  };

  return (
    <>
      <div className="search-news">
        <input
          type="text"
          className="form-control border-0"
          placeholder="Keyword"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button className="input-group-text bg-primary text-dark border-0 px-3">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="top-news">
        {filteredList(mockData, search).map((data) => (
          <div
            className="position-relative overflow-hidden news-card"
            style={{ height: "300px" }}
          >
            <img
              className="img-fluid h-100"
              src={data.urlToImage}
              style={{ objectFit: "cover" }}
            />
            <div className="overlay">
              <div style={{ marginBottom: "140px" }}>
                <p
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                  href=""
                >
                  {data.title}
                </p>
              </div>

              <Link
                to={`/card/${data.source.id}`}
                className="m-0 text-white text-uppercase font-weight-semi-bold"
                style={{ fontSize: "15px" }}
              >
                {" "}
                Lorem ipsum dolor sit amet elit...
              </Link>

              <Link
                to={`/card/${data.source.id}`}
                className="mt-2 text-white text-uppercase "
                style={{ fontSize: "10px", marginLeft: "250px" }}
              >
                {" "}
                More..
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
