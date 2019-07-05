import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import CatDisplay from "./components/CatDisplay";
import CatQuote from "./components/CatQuote";
import CatVoter from "./components/CatVoter";

function App() {
  return (
    <div className="App">
      <Heading />
      <CatDisplay />
      <CatQuote />
      <CatVoter />
    </div>
  );
}

export default App;
