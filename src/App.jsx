import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/home/Home";
import About from "./component/about/About";
import NavBar from "./component/navbar/Nav";
import Education from "./component/education/Education";
import Skills from "./component/skills/Skills";

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
