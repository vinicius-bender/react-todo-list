import React, { useState, useEffect } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/item"
import Modal from "./components/Modal";
import "./todo.css";

const SAVED_ITEMS = "savedItems";

function Todo() {

    // Cria uma variável de estado chamada "items" inicializada como array vazio
    // "setItems" é a função usada para atualizar a lista de tarefas
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

        if (savedItems){
            setItems(savedItems);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);

    function onAddItems(item) {

        //Criando o novo item
        let currentItem = new Item(item);

        // Atualiza o estado "items" adicionando a nova tarefa
        // "[...items]" copia todos os itens existentes
        // "text" adiciona a nova frase como um único item no final do array
        setItems([...items, currentItem]);
        onHideModal();
    }

    function onItemDeleted(item){
        
        /*retorna um novo array contendo apenas os itens que passam no teste definido na função fornecida como argumento.
        Dentro da função de callback, o código verifica se o id do currentItem não é igual ao id do item passado como argumento para a função onItemDeleted.
        Se o id do currentItem for diferente do id do item (ou seja, o item não é o item que queremos excluir), a função retorna true, indicando que o item deve permanecer na lista.
        Se o id do currentItem for igual ao id do item a ser excluído, a função retorna false, indicando que o item não deve ser incluído no novo array.
        */
        let filteredItems = items.filter((currentItem) => {
            return currentItem.id != item.id;
        }); 

        setItems(filteredItems);

    }

    function onDone(item){
        let updatedItems = items.map((currentItem)=> {
            if (currentItem.id === item.id){
                currentItem.done = !currentItem.done;
            }
            return currentItem;
        });
        setItems(updatedItems);
    }

    function onHideModal (){
        setShowModal(false);
    }

    return (
        <div className="container">
            <header className="header"><h1>To-do</h1><button className="addButton" onClick={()=>{setShowModal(true)}}>+</button></header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItems={onAddItems}></TodoForm></Modal>
        </div>
    );
}

export default Todo;