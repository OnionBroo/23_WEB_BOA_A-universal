class Televisor {
    constructor(modelo, ubicacion ){
        this.modelo = modelo;
        this.ubicacion = ubicacion;
    }
    decirTV(){
        return `La tele de el ${this.ubicacion} es una ${this.modelo}`
    }
}

class tvModerna extends Televisor {
    constructor(modelo, ubicacion, funciones, cable ){
        super(modelo, ubicacion);
        this.funciones = funciones;
        this.cable = cable
    }
    decirTVyFunciones(){
        return `${super.decirTV()} y es una ${this.funciones}`
    }
}

const TV1 = new Televisor("Sony", "Comedor", "no")
const TV2 = new tvModerna("Samsung", "Living", "samartTV", "sí")

console.log(TV1)
console.log(TV2)
console.log(TV1.decirTV())
console.log(TV2.decirTVyFunciones())