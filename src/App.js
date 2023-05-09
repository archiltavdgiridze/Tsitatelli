import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/MainComponents/Sidebar";
import MainPage from "./Components/MainComponents/MainPage";
import AboutUs from "./Components/AboutUs/AboutUs";
// import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        {/* <Route path="/" element={<Sidebar />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/filter" element={<Filter />} /> */}
      </Routes>
    </div>
  );
}

export default App;
