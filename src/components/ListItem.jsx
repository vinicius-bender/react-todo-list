import React, { useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../actions/listAction";

function ListItem(props) {

    const dispatch = useDispatch();


    function DoneImg(props) {

        if (!props.done) {
            return <img className="icons" alt="undone" src="./assets/undone.png"></img>
        }

        return (
            <img className="icons" alt="done" src="./assets/done.png"></img>
        );
    }

    /*
    Recebe cada item do array items e seu index.
    Retorna um <li> com o conteúdo do item.
    key={index} é usado pelo React para identificar cada item da lista e otimizar atualizações.
    */
        return (
            <li>
                <Card className={props.item.done ? "done item" : "item"}>
                    {props.item.text}
                    <div>
                        <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
                        <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img className="icons" alt="delete" src="./assets/trash.png"></img></button>
                    </div>
                </Card>
            </li>
        );
}

export default ListItem;