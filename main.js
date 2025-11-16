class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.nextNode) {
         current = current.nextNode;   
        }
        current.nextNode=newNode;
    }
    prepend(value){
        let newNode = new Node(value);
        newNode.nextNode=this.head;
        this.head = newNode;
    }
    size(){
        let current=this.head;
        let count=0;
        while(current){
            count++;
            current=current.nextNode
        }
        return count
    }
    head(){
        if(!this.head){
            return null;
        }
        return this.head;
    }
    tail(){
        if(!this.head){
            return null;
        }
        let current=this.head;
        while(current.nextNode){
            current=current.nextNode;
        }
        return current;
    }
    at(index){
        if(!this.head){
            return null;
        }
        let current = this.head;
        let i=0;
        while(current) {
            if(i===index) {
                return current
            }
            current=current.nextNode;
            i++;
        }
        return current
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(!this.head.nextNode){
            this.head=null;
            return;
        }
        let current = this.head;
        while(current.nextNode.nextNode){
            current=current.nextNode;
        }
        current.nextNode=null;
    }
}