import { Link } from "react-router-dom";
import pageData from "../data/pageData";

const Home = () => {
  return (
    <div
      className="container-fluid p-2"
      style={{ backgroundColor: "rgb(238, 163, 50)" }}
    >
      <div className="d-flex justify-content-center  flex-wrap ">
        {pageData.map((item) => (
          <div
            className="m-2 rounded-3"
            style={{ border: "2px solid black" }}
            key={item.id}
          >
            <div className="card" style={{ width: "18rem", height: "100%" }}>
              <div className="text-center">
                <img
                  src={item.image}
                  className="card-img-top mt-2"
                  alt={item.heading}
                  style={{ width: "140px", height: "auto" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-2">{item.heading}</h5>
                <p className="card-text text-center">{item.body}</p>
              </div>
              <div className="text-center mb-2">
                <Link
                  to={`/convert/${item.path}`}
                  className="btn btn-primary btn-outline-dark text-white px-4 fs-5"
                >
                  Convert
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
