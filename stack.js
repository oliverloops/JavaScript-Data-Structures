//Stack Implementation
class Stack {
    constructor(){
        this.store = [];
        this.pos = 0;
        this.size = 10;
    }

    add(item){
        if(this.pos < this.size){
            this.store[this.pos] = item;
            this.pos = this.pos + 1;
        } 
    }

    isEmpty(){
        return this.pos === 0;
    }

    peek(){
        if(this.isEmpty() === false){
            console.log(this.store[this.pos - 1]);
            return this.store[this.pos - 1];
        }
    }

    remove(){
        if(this.isEmpty() === false){
            this.pos = this.pos - 1;
            return this.store.pop();
        }
    }

    lenght(){
        console.log(this.pos);
        return this.pos;
    }

    print(){
        for(let i = 0; i < this.pos; i++){
            console.log(this.store[i]);
        }
        
    }
}

//Pruebas
const stack = new Stack();
stack.add(10);
stack.add(9);
stack.add(8);
stack.add(7);
stack.remove();
stack.remove();
stack.peek();
stack.lenght();