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

const App = () => {
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
      </Router>
    </div>
  );
};

export default App;
