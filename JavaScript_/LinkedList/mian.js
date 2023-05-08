class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertNode(value){
        const newNode = new Node(value,null)
        if(this.head === null){
            this.head = newNode;
        }else{
            let allNodes = this.head;
            while(allNodes.next){
                allNodes = allNodes.next
            }
            allNodes.next = newNode;
        }
    }
    deletNode(value){
        if(this.head.value === value){
            this.head = this.head.next;
        }else{
            let allNodes = this.head
            while(allNodes.next){
                if(allNodes.next.value === value){

                    allNodes.next = allNodes.next.next;
                    return;
                }
                allNodes = allNodes.next
            }
        }
    }
}
LinkedList.insertNode()