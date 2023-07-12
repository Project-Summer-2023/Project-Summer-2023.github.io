import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Tasks from "./pages/tasks";

const TaskRow = () => {
  const [val, valSetter] = useState(0)

  function fetchFromApi() {
    axios({
      method: "GET",
      url: "/test",
    })
      .then((response) => {
        const res = response.data;
        valSetter({
          id: res.id,
          name: res.name,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  useEffect(() => {
    fetchFromApi()
  }, [])

  console.log("retrieved from api:", val)

  return (
    <>
      <div>hello</div>
      <div>{val.id}</div>
    </>
  );
}

function App() {
  return (
    <>
      <Tasks />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
