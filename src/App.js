import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen></LoginScreen>
        ) : (
          <Routes>
            <Route path="/login"></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
