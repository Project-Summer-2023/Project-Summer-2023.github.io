import React, { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import InventoryList from "./components/InventoryList";

function App() {
  return (
    <>
      <InventoryList listName="inventory" />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
