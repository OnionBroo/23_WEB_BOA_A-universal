let number = 5
const p = new Promise((resolve, reject)=>{
    if(number ===5){
        resolve('la variable es igual a 5')
    }else{
        reject('La variable no es igual a 5')
    }
})
p.then(res =>{
    console.log('se cumplio', res)
})
p.catch(err =>{
    console.log('No se cumple que', err)
})


const getBookByIdPromise = (id) =>{
    const promise = new Promise ((resolve,reject) =>{
        setTimeout(() => {
            const booksDB = [
                {
                    id: 1,
                    title: "Nunca te pares",
                    autor: 'Phil Knight'
                },
                {
                    id: 2,
                    title: 'Los lideres comen al final',
                    autor: 'Simon Sinek'
                },
                {
                    id: 3,
                    title: 'Hábitos Atómicos',
                    autor: 'James Clear'
                }
            ]
            const book = booksDB.find(book => book.id === id)
            if(book){
                resolve(book)
            }else{
                reject('No se encontro el libro')
            }
        }, 2000)
    })
    return promise;
}

getBookByIdPromise(1)
.then((res) =>{
    console.log('El libro encontrado es', res)
})
