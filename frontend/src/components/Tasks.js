import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import styles from "../styles/tasks.module.css";

const Tasks = () => {
  const [tasksData, setTasksData] = useState([]);
  console.log("Reloaded tasks");

  function queryData() {
    axios({
      method: "GET",
      url: "/tasks",
    })
      .then((response) => {
        const res = response.data;
        setTasksData(res);
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
    queryData();
  }, []);

  console.log(tasksData);

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasksData.map((task) => {
          return (
            <Task
              name={task.content}
              completed={task.completed}
              id={task.id}
            ></Task>
          );
        })}
      </ul>
    </>
  );
};

export default Tasks;
