import React from "react";
import "./CatDisplay.css";

const CatDisplay = ({ catPic, catName, catAge }) => {
  return (
    <div>
      <img className="ProfilePic" src={catPic} alt="catPics" />
      <div className="Text">
        {catName}, {catAge}
      </div>
    </div>
  );
};
export default CatDisplay;
