import { Link } from "react-router-dom";
import Image1 from "../images/Home.png";
import Image2 from "../images/demoImg.png";
import Image3 from "../images/values.png";
import Image4 from "../images/result.png";

const Card = ({ step, image, title, text, link }) => (
  <div
    className="card my-3 mx-5 p-2"
    style={{ width: "18rem", border: "2px solid black" }}
  >
    <span className="position-absolute top-0 start-0 fs-4 py-2 translate-middle badge rounded-pill bg-danger">
      {step}
    </span>
    <img src={image} className="card-img-top mt-3" alt="Preview" />
    <div className="card-body">
      <h5 className="card-title text-center fw-bold">{title}</h5>
      <p className="card-text text-center">{text}</p>

      {link && (
        <div className="text-center">
          <Link to={link} className="btn btn-primary px-4 fs-5">
            {title}
          </Link>
        </div>
      )}
    </div>
  </div>
);

const About = () => {
  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1 className="text-dark mt-3 mb-5 fw-bold">About</h1>
      </div>
      <div className="d-flex justify-content-center flex-wrap my-3">
        <Card
          step="Step 1"
          image={Image1}
          title="Home Page"
          text="The Home Page is the starting point of our application. Here, you
              can find an overview of the features and functionalities we offer.
              Navigate through the menu to explore different sections and get a
              comprehensive understanding of what we provide."
          link="/"
        />
        <Card
          step="Step 2"
          image={Image2}
          title="Demo Page"
          text="The Demo Page provides a hands-on experience of our application.
              Here, you can interact with various features and see how they work
              in real-time. This section is designed to give you a practical
              understanding of our offerings."
        />
        <Card
          step="Step 3"
          image={Image3}
          title="Fill the Values"
          text="In the Fill the Values section, you can input the necessary data
              required for calculations. This step is crucial as it ensures that
              the results generated are accurate and tailored to your specific
              needs."
        />
        <Card
          step="Step 4"
          image={Image4}
          title="Calculated Result"
          text=" The Calculated Result section displays the outcomes based on the
              values you have entered. This page provides a detailed analysis
              and insights, helping you make informed decisions based on the
              data."
        />
      </div>
    </div>
  );
};

export default About;
