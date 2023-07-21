import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
// import styles from "../styles/tasks.module.css";

const InventoryList = ({ listName }) => {
  const [inventoryListData, setInventoryListData] = useState([]);

  function queryData() {
    axios({
      method: "GET",
      url: "/inventory",
    })
      .then((response) => {
        const res = response.data;
        setInventoryListData(res);
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

  return (
    <>
      <h1>Inventory</h1>
      <NewItem listName={listName} />

      <ul>
        {inventoryListData.map((item) => {
          return (
            <ListItem
              name={item.content}
              id={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default InventoryList;
