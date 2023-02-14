//Dado el siguiente array:
var elementosDePc = ['teclado', 'mouse', 'cpu', 'monitor'];
//Devolver primer y luego el ultimo elemento del array
//Obtener Largo del Array
//Agregar un item al final y otro al comienzo del array
//haz console.log() del array con los items agregados
/*console.log(elementosDePc[0])
console.log(elementosDePc[3])
console.log(elementosDePc.length)
elementosDePc.push("Silla gamer")
elementosDePc.unshift("Cascos Gamer")
console.log(elementosDePc)*/

//Numero, condicional
// Si "numero" es divisible entre 3, alert "numero divisible por 3"
// Si "numero" es divisible entre 5, alert "numero divisible por 5"
// Si "numero" es divisible entre 3 y 5 (ambos), alert "numero divisible por 3 y 5"

/*var numero = prompt("ingrese un numero")

if(numero%3 === 0 && numero%5 === 0){
    alert("numero divisible por 3 y 5")
}
else if(numero%5 === 0){
    alert("numero divisible por 5")
}
else if(numero%3 === 0){
    alert("numero divisible por 3")
}*/
var numeros = [
    1, 100, 465, 8, 488, 3, 8, 46, 54, 89, 41, 31, 685, 46, 65, 465, 89, 13, 228,
   ];
  
  // // // Tu código:
  var lista100 = []
  for(i = 0 ; i = numeros.length ; i++) {
    if (numeros[i]>100){
      console.log(numeros[i])
      lista100.push(numeros[i]);
    }
  }
  console.log(lista100);
  
