import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import CatDisplay from "./components/CatDisplay";
// import CatQuote from "./components/CatQuote";
import CatVoter from "./components/CatVoter";
import catDatabase from "./catDatabase.json";

class App extends React.Component {
  state = catDatabase;
  
  render() {
    return (
      <div className="App">
        <Heading />
        <CatDisplay catPic={this.state.catDatabase[2].url} catName={this.state.catDatabase[2].name} catAge={this.state.catDatabase[2].age} />
        {/* <CatQuote /> */}
        <CatVoter likedFunc = {this.likedFunc} />
      </div>
    );
  }
//   const liked = this.state.catDatabase[2].liked};
//   const likedFunc = () => {
//     console.log(liked)
// }
// likedFunc()
}

export default App;
