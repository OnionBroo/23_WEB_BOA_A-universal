//Numero, condicional
// Si "numero" es divisible entre 3, alert "numero divisible por 3"
// Si "numero" es divisible entre 5, alert "numero divisible por 5"
// Si "numero" es divisible entre 3 y 5 (ambos), alert "numero divisible por 3 y 5"

var numero = prompt("ingrese un numero")

if(numero%3 === 0 && numero%5 === 0){
    alert("numero divisible por 3 y 5")
}
else if(numero%5 === 0){
    alert("numero divisible por 5")
}
else if(numero%3 === 0){
    alert("numero divisible por 3")
}
//Dado el siguiente array:
var elementosDePc = ['teclado', 'mouse', 'cpu', 'monitor'];
//Devolver primer y luego el ultimo elemento del array
//Obtener Largo del Array
//Agregar un item al final y otro al comienzo del array
//haz console.log() del array con los items agregados
console.log(elementosDePc[0])
console.log(elementosDePc[3])
console.log(elementosDePc.length)
elementosDePc.push("Silla gamer")
elementosDePc.unshift("Cascos Gamer")
console.log(elementosDePc)