import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import CatDisplay from "./components/CatDisplay";
import CatQuote from "./components/CatQuote";
import CatVoter from "./components/CatVoter";
import catDatabase from "./catDatabase.json";

console.log(catDatabase);
class App extends React.Component {
  state = catDatabase;
  render() {
    return (
      <div className="App">
        <Heading />
        <CatDisplay catpics={this.state.url} />
        <CatQuote />
        <CatVoter />
      </div>
    );
  }
}

export default App;
