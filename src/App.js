import "./App.css";

import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
