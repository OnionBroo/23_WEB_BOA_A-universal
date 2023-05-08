class Pila {
    constructor(){
        this.pila = {}
        this.contador = 0
    }

    push(element){
        this.pila[this.contador] = element
        this.contador = this.contador + 1
    }
    pop(){
        let borrarElement
        if(this.contador > 0){
            this.contador = this.contador - 1;
            delete this.pila[this.contador]
        }else{
            return null
        }
    }
    
}
const pila = new Pila()
pila.push('plato 1')
pila.push('plato 2')
pila.push('plato 3')
console.log(pila)

