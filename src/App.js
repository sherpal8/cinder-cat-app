import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import CatDisplay from "./components/CatDisplay";
import CatVoter from "./components/CatVoter";
import { catDatabase } from "./catDatabase.json";

class App extends React.Component {
  state = { catIndex: 2 };
  render() {
    return (
      <div className="App">
        <Heading />
        <CatDisplay
          catPic={catDatabase[this.state.catIndex].url}
          catName={catDatabase[this.state.catIndex].name}
          catAge={catDatabase[this.state.catIndex].age}
        />
        <CatVoter/>
      </div>
    );
  }
  nextProfile(catIndex) {
    console.log('REQUESTED NEXT PROFILE')
    // catIndex++
    console.log(catIndex);
    this.setState({catIndex: catIndex++});
  }
}

export default App;
