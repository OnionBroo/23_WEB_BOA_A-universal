const obtenerTiempoRuta = (id) => {
    const promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
            let tiempos = [
                {
                    id: 1,
                    code: "10AB",
                    name: 'Laguna Triangulo, Lenca, Puerto Montt',
                    tiempo: {
                        ida: 320,
                        vuelta: 260
                    }
                },
                {
                    id: 2,
                    code: "14AZ",
                    name: 'Laguna Toro, Sector El Azul, Futaleufu',
                     tiempo: {
                        ida: 240,
                        vuelta: 120
                    }
                },
                {
                    id: 3,
                    code: "09AZ",
                    name: 'Parque Don Toribio, Futrono',
                    tiempo: {
                        ida: 180,
                        vuelta: 120
                    }
                }
            ]
            const ruta = tiempos.find(ruta => ruta.id === id)
            if(!ruta){
                reject('no se encontró la ruta')
            }else{
                resolve(ruta.name, ruta.code)
            }
            }, 2000)
    })
    return promise
}
const getData = async (id) =>{
    try{
        const rutaEncontrada = await obtenerTiempoRuta(id)
        console.log('La ruta encontrada es:',rutaEncontrada)
    } catch(err){
        console.log(err)
    }
}
getData(1)



/*En función del id retornar el nombre y el código del lugar, utilizando async / await, try / catch*/