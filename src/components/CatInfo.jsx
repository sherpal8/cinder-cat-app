import React from "react";
import './CatInfo.css'

const CatInfo = ({catName, catAge}) => {
  return <div className="Info">
    <div className="NameAge">{catName}, {catAge}</div>
    <div className="Job">Cat</div>
    </div>;
};

export default CatInfo;
