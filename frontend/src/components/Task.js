import React, { useEffect, useState } from "react";
import axios from "axios";

const Task = ({ name, completed, id }) => {
  const [taskData, setTaskData] = useState({
    name: name,
    completed: completed,
    id: id,
  });
  console.log(name, completed, id);
  // /tasks/id/=1
  return (
    //button that calls api and updates the thing
    <li>{name}</li>
  );
};

export default Task;
