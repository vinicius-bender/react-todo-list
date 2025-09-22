import React, { useState } from "react";
import ListItem from "./ListItem";

function List(props) {

    return (
        <ul>
            {/* Para cada item do array "items", chama createListItem e renderiza um <li> */}
            {props.items.map(currentItem => <ListItem key={currentItem.id} item={currentItem} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>)}
        </ul>
    );
}

export default List;