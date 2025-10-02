import React, { useState, useEffect } from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/item"
import Modal from "./components/Modal";
import listReduder from "./reducers/listReducer";
import "./todo.css";

const SAVED_ITEMS = "savedItems";

function persistState (state){
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState (){
    const currentState = localStorage.getItem(SAVED_ITEMS);

    if (!currentState){
        return [];
    }

    return JSON.parse(currentState);
}

const store = createStore(listReduder, loadState());

store.subscribe(() => {
    persistState(store.getState());
});

function App() {

    // Cria uma variável de estado chamada "items" inicializada como array vazio
    // "setItems" é a função usada para atualizar a lista de tarefas
    //const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    function onHideModal (){
        setShowModal(false);
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className="header"><h1>To-do</h1><button className="addButton" onClick={()=>{setShowModal(true)}}>+</button></header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </Provider>
        </div>
    );
}

export default App;