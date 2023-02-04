import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
