//Queue Implementation
class Queue {
    constructor(){
        this.data = [];
        this.pos = 0;
        this.size = 10;
    }

    //Añade un elemento al final de la fila
    enqueue(item){
        if(this.pos < this.size){
            this.data[this.pos] = item;
            this.pos = this.pos + 1;
        }
    }

    //Verifica si la fila esta vacía
    isEmpty(){
        return this.pos === 0;
    }

    //Obtén el primer valor en la fila
    getFirst(){
        if(this.isEmpty() === false){
            console.log(this.data[0])
            return this.data[0];
        }
    }

    //Obtén el último valor en la fila
    getLast(){
        if(this.isEmpty() === false){
            console.log(this.data[this.pos - 1])
            return this.data[this.pos - 1];
        }
    }

    //Elimina un elemento de la fila
    dequeue(){
        if(this.isEmpty() === false){
            this.pos = this.pos - 1
            return this.data.shift();
        }
    }

    print(){
        for(let i = 0; i < this.pos; i++){
            console.log(this.data[i]);
        }
    }

    lenght(){
        console.log(this.pos);
        return this.pos;
    }
}

//Prueba
const queue = new Queue();
queue.enqueue("My");
queue.enqueue("name");
queue.enqueue("is");
queue.enqueue("Jimbo");
queue.dequeue();
queue.print();
queue.lenght();
queue.getFirst();
queue.getLast();