import "./App.css";
import HomeScreen from "./HomeScreen";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login"></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
