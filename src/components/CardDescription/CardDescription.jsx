import { useParams } from "react-router-dom";
import { mockData } from "../../static/mock";
import Header from "../Header/Header";
import "../../App.css";
const CardDescription = () => {
  const { id } = useParams();
  const selectedCard = mockData.find((prod) => prod.source.id === id);
  const { title, urlToImage, description } = selectedCard;
  return (
    <div className="app">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div
          className="position-relative overflow-hidden news-card"
          style={{ height: "400px", width: "900px" }}
        >
          <img
            className="img-fluid h-100"
            src={urlToImage}
            style={{ objectFit: "cover", width: "100%" }}
          />
          <div className="overlay">
            <div style={{ marginBottom: "250px" }}>
              <p
                className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                href=""
              >
                {title}
              </p>
            </div>
            <a
              className="m-0 text-white text-uppercase font-weight-semi-bold"
              style={{ fontSize: "15px" }}
              href=""
            >
              Lorem ipsum dolor sit amet elit...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
