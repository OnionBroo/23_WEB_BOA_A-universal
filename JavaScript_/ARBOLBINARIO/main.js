class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    isEmpty(){
        if(this.root === null){
            return true
        } else {
            return false
        }
    }
    insertNode(value){
        if(this.isEmpty()){
            this.root = new Node(value)
            return
        }

        let aux = this.root;

        while(aux){
            if(value < aux.value ){

            } else {
                if(aux.right == null){
                    aux.right = new Node(value)
                    return
                } else {
                    aux = aux.right
                }
            }
        }
    }
    deleteNode(value, node = this.root){
        if(!node){
            return null
        }
        if(node.value === value){
            if(node.left === null & node.right === null){
                return null
            }
            if(node.right === null){
                return node.left
            }
            if(node.left === null){
                return node.right
            }
        }
    }
}

const tree = new Tree;
