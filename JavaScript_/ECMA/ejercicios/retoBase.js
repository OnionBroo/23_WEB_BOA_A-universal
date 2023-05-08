const database_choferes = [
{ name: "Felipe Andrade", recorrido: "A2", reclamos: 19, total_pasajeros: [{ mes: "Marzo", semanas: [{ semana: 1, días: { lunes: 130, martes: 240, miércoles: 135, jueves: 250, viernes: 345, sábado: 270, domingo: 255 } }] }] },

{ name: "Camilo Gallardo", recorrido: "B2", reclamos: 439, total_pasajeros: [{ mes: "Abril", semanas: [{ semana: 1, días: { lunes: 188, martes: 244, miércoles: 145, jueves: 225, viernes: 544, sábado: 277, domingo: 188 } }] }] },
  
{ name: "Diego Moreira", recorrido: "B2", reclamos: 33, total_pasajeros: [{ mes: "Mayo", semanas: [{ semana: 1, días: { lunes: 422, martes: 555, miércoles: 635, jueves: 878, viernes: 765, sábado: 434, domingo: 285 } }] }] },
  
{ name: "Roberto Rodriguez", recorrido: "A2", reclamos: 66, total_pasajeros: [{ mes: "Marzo", semanas: [{ semana: 1, días: { lunes: 222, martes: 422, miércoles: 314, jueves: 349, viernes: 228, sábado: 490, domingo: 244 } }] }] },

{ name: "Daniel Quinteros", recorrido: "A2", reclamos: 90, total_pasajeros: [{ mes: "Marzo", semanas: [{ semana: 1, días: { lunes: 460, martes: 330, miércoles: 455, jueves: 225, viernes: 114, sábado: 447, domingo: 335 } }] }] },

{ name: "Diego Sepulveda", recorrido: "A2", reclamos: 10, total_pasajeros: [{ mes: "Marzo", semanas: [{ semana: 1, días: { lunes: 134, martes: 449, miércoles: 315, jueves: 620, viernes: 775, sábado: 323, domingo: 835 } }] }] },

{ name: "Felipe Sepulveda", recorrido: "A2", reclamos: 80, total_pasajeros: [{ mes: "Marzo", semanas: [{ semana: 1, días: { lunes: 832, martes: 951, miércoles: 225, jueves: 740, viernes: 735, sábado: 700, domingo: 320 } }] }] },
]

console.log(database_choferes)

//-_____________-//

const choferesA2 = []
let contadorR = 0
for(i = 0 ; i < database_choferes.length ; i++) {
    if(database_choferes[i].recorrido == "A2") {
        contadorR++
        choferesA2.push(database_choferes[i])
    }
}
console.log("--> ",contadorR, " choferes realizan el recorrido A2 ", choferesA2)

let choferChafa = {
    name: undefined,
    reclamos: 0,
}

database_choferes.forEach(choferReclamo => {
    if(choferReclamo.recorrido == "A2"){
        if(choferChafa.reclamos >choferReclamo.reclamos){
            console.log("el chofer", choferReclamo.name,"actualmente tiene el máximo de reclamos")
        }else{
            choferChafa = {
                name: choferReclamo.name,
                reclamos: choferReclamo.reclamos
            }
        }
    }
});
console.log("Final --> El chofer",choferChafa.name, "tiene el maximo de reclamos, fin.")

//-________________-//

const choferesB2 = []

let contadorR2 = 0

for(i = 0 ; i < database_choferes.length ; i++) {
    if(database_choferes[i].recorrido == "B2") {
        contadorR2++
        choferesB2.push(database_choferes[i])
    }
}
console.log("--> ",contadorR2, " choferes realizan el recorrido B2 ", choferesB2)

let choferChafa2 = {
    name: undefined,
    reclamos: 0,
}

database_choferes.forEach(choferReclamo2 => {
    if(choferReclamo2.recorrido == "B2"){
        if(choferChafa2.reclamos >choferReclamo2.reclamos){
            console.log("el chofer", choferReclamo2.name,"actualmente tiene el máximo de reclamos")
        }else{
            choferChafa2 = {
                name: choferReclamo2.name,
                reclamos: choferReclamo2.reclamos
            }
        }
    }
});
console.log("Final --> El chofer",choferChafa2.name, "tiene el maximo de reclamos, fin.")

//-_____________-//


let reclamosA = 0, reclamosB = 0 

for(i = 0; i < choferesA2.length; i++){
    reclamosA = reclamosA + choferesA2[i].reclamos
}


for(i = 0; i < choferesB2.length; i++){
    reclamosB = reclamosB + choferesB2[i].reclamos
}


if(reclamosA > reclamosB){
    console.log("El recorrido A2 contiene más reclamos por trabajador")
}else{
    console.log("El recorrido B2 contiene más reclamos por trabajador")
}