import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import CatDisplay from "./components/CatDisplay";
// import CatQuote from "./components/CatQuote";
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
        {/* <CatQuote /> */}
        <CatVoter likedFunc={this.likedFunc} />
      </div>
    );
  }
  //   const liked = this.state.catDatabase[2].liked};
  likedFunc(catIndex) {
    console.log(catIndex);
    this.setState(state => {
      catIndex++;
    });
  }
  // // likedFunc()
}

export default App;
