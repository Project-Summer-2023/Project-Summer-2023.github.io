import React, { useEffect, useState } from "react";
import axios from "axios";

const NewItem = ({ listName }) => {

    const [userInput, setUserInput] = useState('');

    // console.log(state);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // setState({ ...state, input: event.target.value })
            addItem(event.target.value);
            event.target.value = '';
        }
    }

    const addItem = (itemName) => {
        // axios({
        //     method: "GET",
        //     url: "/" + listName + "/add",

        // })
        console.log("list name: " + listName);
        console.log("item name: " + itemName);
        axios.post('/' + listName + '/add',
            {
                itemName: itemName
            })
            .then((response) => {
                const res = response.data;
                // setInventoryListData(res);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    return (
        <input type={"text"}
            // defaultValue={state.default}
            placeholder="Add New Item"
            onKeyDown={handleKeyDown} />
    )
};

export default NewItem;