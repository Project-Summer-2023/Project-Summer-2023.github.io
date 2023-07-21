import React, { useEffect, useState } from "react";
// import axios from "axios";

const ListItem = ({ name, id }) => {
  const [listItemData, setListItemData] = useState({
    name: name,
    id: id,
  });
  console.log(name, id);
  // /tasks/id/=1
  return (
    //button that calls api and updates the thing
    <li>{name}</li>
  );
};

export default ListItem;
