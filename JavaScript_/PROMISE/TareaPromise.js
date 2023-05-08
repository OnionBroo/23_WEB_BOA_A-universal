const obtenerRutas = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let rutas = [
                {
                    id: 1,
                    code: "10AB",
                    name: 'Laguna Triangulo, Lenca, Puerto Montt'
                },
                {
                    id: 2,
                    code: "14AZ",
                    name: 'Laguna Toro, Sector El Azul, Futaleufu'
                },
                {
                    id: 3,
                    code: "09AZ",
                    name: 'Parque Don Toribio, Futrono'
                }
            ]
            const Ruta = rutas.find(Ruta => Ruta.id === id)
            if(Ruta){
                resolve(Ruta)
            }else{
                reject('No se encontró la ruta')
            }
        }, 1000)
    })
    return promise
}
const obtenerTiempo = (id) => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            let tiempos = [
                {
                    id: 1,
                    code: "10AB",
                    tiempo: {
                        ida: 320,
                        vuelta: 260
                    }
                },
                {
                    id: 2,
                    code: "14AZ",
                    tiempo: {
                        ida: 240,
                        vuelta: 120
                    }
                },
                {
                    id: 3,
                    code: "09AZ",
                    tiempo: {
                        ida: 180,
                        vuelta: 120
                    }
                }
            ]
            const tiempoRuta = tiempos.find(horaIda => horaIda.id === id)
            const tiempoTotal = tiempoRuta.tiempo.ida + tiempoRuta.tiempo.vuelta
            const horaTotal = tiempoTotal/60
            if(horaTotal){
                resolve(horaTotal)
            } else{
                reject('kapasao')
            }
        },2000)
    })
    return promise
}

obtenerRutas(3)
.then((res) =>{
    console.log('1. La ruta encontrada es', res)
    obtenerTiempo(res.id)
    .then((resHora)=>{
        console.log('2. Con una duración de', resHora)
    })
    .catch((err)=>{
        console.log('3. Hubo un error', err)
    })
})
.catch((err)=>{
    console.log('4. Hubo un error', err)
})