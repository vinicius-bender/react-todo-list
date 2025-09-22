class Item {

    //Variavel de classe (qualquer objeto consegue ver essa variavel e modificar ela), ou seja,
    //a cada criação de um novo OBJ esse novo OBJ incrementa o valor do ID
    static lastId = 0;

    constructor(text){
        this.id = Item.lastId++,
        this.text = text,
        this.done = false,
        this.date = new Date()
    }
}

export default Item;
