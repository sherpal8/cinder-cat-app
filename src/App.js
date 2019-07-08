import React from "react";
import "./App.css";
import TopIcons from "./components/TopIcons"
import Heading from "./components/Heading";
import CatDisplay from "./components/CatDisplay";
import CatInfo from "./components/CatInfo"
import CatVoter from "./components/CatVoter";
import { catDatabase } from "./catDatabase.json";

class App extends React.Component {
  state = { catIndex: 2 };
  render() {
    return (
      <div className="App">
        <TopIcons />
        <Heading />
        <CatDisplay
          catPic={catDatabase[this.state.catIndex].url}
        />
        <CatInfo
          catName={catDatabase[this.state.catIndex].name}
          catAge={catDatabase[this.state.catIndex].age}
        />
        <CatVoter />
      </div>
    );
  }
  nextProfile(catIndex) {
    console.log('REQUESTED NEXT PROFILE')
    this.setState({catIndex: catIndex++});
  }
}

export default App;

