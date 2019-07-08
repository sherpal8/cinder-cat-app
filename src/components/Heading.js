import React from "react";
import cinderlogo from "../cinderlogo.jpg";
import "./Heading.css"

const Heading = () => {
  return (
    <div >
      <img className="Heading-img" src={cinderlogo} alt="cinder logo" />
    </div>
  );
};

export default Heading;
