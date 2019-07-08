import React from "react";
import "./CatVoter.css";

class CatVoter extends React.Component {
    constructor(props) {
      super(props);
      this.nextProfile = this.nextProfile.bind(this);
    }
    nextProfile() {
      console.log('Click happened');
    }
    render() {
      return <div>
                <button onClick={this.nextProfile} className="Like" ><i className="fa fa-check-circle"/></button>
                <button onClick={this.nextProfile} className="Nope"><i className="fa fa-times"/></button>
              </div>
    }
  }
  




  // nextProfile = () => {
  //   this.console('Triggered next profile')
  // }
  // render() {
  //   return <button onClick={this.nextProfile.bind(this)} className="Like">
  //     <i className="fa fa-check-circle"/></button><div><button className="Nope"><i className="fa fa-times"/></button></div>
  //   }

  //     ;
    // };
  

export default CatVoter;
