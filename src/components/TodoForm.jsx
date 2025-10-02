import React, { useState } from "react";
import { addItem } from "../actions/listAction";
import {useDispatch} from "react-redux";

function TodoForm(props) {

    // Cria uma variável de estado chamada "text" inicializada como string vazia
    // "setText" é a função usada para atualizar o valor de "text"
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    //Cada vez que digita no input, essa função salva o valor no estado text.
    function handleChange(event) {

        // Pega o valor atual do input do evento onChange
        let inputValue = event.target.value;

        // Atualiza o estado "text" com o valor digitado no input
        setText(inputValue);
    }

    function handleClick(event) {

        // Evita que o formulário tente recarregar a página ao clicar no botão
        event.preventDefault();

        if (text.trim() == "") {
            return;
        }

        dispatch(addItem(text));
        setText("");
        props.onHideModal();
    }

    return (
        <form>
            {/* O input chama handleChange toda vez que o usuário digita */}
            <input type="text" onChange={handleChange} value={text}></input>
            {/* O botão chama handleClick ao ser clicado */}
            <button onClick={handleClick}>Add</button>
        </form>
    );
}

export default TodoForm;