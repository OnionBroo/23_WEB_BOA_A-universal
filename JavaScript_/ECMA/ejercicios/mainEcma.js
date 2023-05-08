console.log("hola")
const chile = []
const peru = []
const mexico = []
const venezuela = []



const trabajadores = [
    {
     nombre: "Camilo P.",
     profesion: "Backend developer",
     nacionalidad: "Chile"
    },
    {
     nombre: "Felipe P.",
     profesion: "Backend developer",
     nacionalidad: "México"
    },
    {
     nombre: "Roberto A.",
     profesion: "Backend developer",
     nacionalidad: "Perú"
    },
    {
     nombre: "Nicolas A.",
     profesion: "Backend developer",
     nacionalidad: "Perú"
    },
    {
     nombre: "Daniela K.",
     profesion: "Backend developer",
     nacionalidad: "Venezuela"
    },
    {
     nombre: "David A.",
     profesion: "UX/UI",
     nacionalidad: "Chile"
    },
    {
     nombre: "Maria A.",
     profesion: "DevOps developer",
     nacionalidad: "México"
    },
    {
     nombre: "Carlos A.",
     profesion: "Frontend developer",
     nacionalidad: "Venezuela"
    }
   ]
for(i = 0 ; i < trabajadores.length ; i++){
    if(trabajadores[i].nacionalidad == "Chile"){
        console.log("dentro de for de chile", i)
        chile.push(trabajadores[i])
    }
    else if(trabajadores[i].nacionalidad == "Perú"){
        console.log("dentro de for de peru", i)
        peru.push(trabajadores[i])
    }
     else if(trabajadores[i].nacionalidad == "México"){
        console.log("dentro de for de mexico", i)
        mexico.push(trabajadores[i])
    }
    else if(trabajadores[i].nacionalidad == "Venezuela"){
        console.log("dentro de for de venezuela" , i)
        venezuela.push(trabajadores[i])
    }
}
console.log("lista de Chile",chile)
console.log("lista de peru",peru)
console.log("lista de mexico",mexico)
console.log("lista de venezuela",venezuela)
