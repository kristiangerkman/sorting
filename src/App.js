import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Bubble from "./components/Bubble";
import Insertion from "./components/Insertion";
import Counting from "./components/Counting";
import Heap from "./components/Heap";
import Merge from "./components/Merge";
import Quick from "./components/Quick";
import Selection from "./components/Selection";
import Canvas from "./components/Canvas"
import Test from "./components/Test"



const App = () => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
  return (
    <div>
      <Router>
        <Menu />
       
        <Route path="/bubble" render={() => <Bubble />} />
        <Route path="/insertion" render={() => <Insertion />} />
        <Route path="/counting" render={() => <Counting />} />
        <Route path="/heap" render={() => <Heap />} />
        <Route path="/merge" render={() => <Merge />} />
        <Route path="/quick" render={() => <Quick />} />
        <Route path="/selection" render={() => <Selection />} />
        <Route path="/test" render={() => <Test/>} />
      </Router>
    </div>
  );
};

export default App;
