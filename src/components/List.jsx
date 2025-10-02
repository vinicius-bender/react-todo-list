import React, { useState } from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

function List(props) {

    const items = useSelector(state => state);

    return (
        <ul>
            {/* Para cada item do array "items", chama createListItem e renderiza um <li> */}
            {items.map(currentItem => <ListItem key={currentItem.id} item={currentItem}></ListItem>)}
        </ul>
    );
}

export default List;