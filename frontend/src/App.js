import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <Tasks />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
