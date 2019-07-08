import React from "react";
import "./CatVoter.css";

const CatVoter = ({ likedFunc }) => {
  return (
    <div>
      <button onClick={() => likedFunc()} className="Like">
        <i className="fa fa-check-circle" />
      </button>
      <button className="Nope">
        <i className="fa fa-times" />
      </button>
    </div>
  );
};

export default CatVoter;
