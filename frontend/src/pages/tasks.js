import React, { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  const [taskQueryData, setTaskQueryData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/tasks",
    })
      .then((response) => {
        const res = response.data;
        setTaskQueryData(res);
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
    getData()
  }, [])

  console.log(taskQueryData)

  return <h1>Tasks</h1>;
};

export default Tasks;
