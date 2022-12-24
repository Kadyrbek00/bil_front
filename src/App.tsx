import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Meeting from "./Components/Meeting";
import Nav from "./Components/Nav";
import Contacts from "./Components/Contacts";
import About from "./Components/About";
import Specialists from "./Components/Specialists";
import BurgerMenu from "./Components/Burger-menu";

function App() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="App">
      <div className={menuActive ? "burger-btn active" : "burger-btn"} onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <Nav />
      <BurgerMenu menuActive={menuActive} />
      <div className="components">
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;