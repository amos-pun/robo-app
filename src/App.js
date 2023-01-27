import React from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div>
      <h1 className="text-center">Robo Friends</h1>
      <SearchBox />
      <div className="col-lg-12">
      <CardList robots={robots} />
      </div>
    </div>
  );
};

export default App;
