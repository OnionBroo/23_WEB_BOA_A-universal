const getBookById = (id) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const booksDB = [
                {
                    id: 1,
                    title: "Nunca te pares",
                    autor: 'Phil Knight',
                    ubication: 'Pasillo 4, estante A, repisa 1'
                },
                {
                    id: 2,
                    title: 'Los lideres comen al final',
                    autor: 'Simon Sinek',
                    ubication: 'Pasillo 1, estante B, repisa 5'
                },
                {
                    id: 3,
                    title: 'Hábitos Atómicos',
                    autor: 'James Clear',
                    ubication: 'Pasillo 2, estante D, repisa 1'
                },
                {
                    id: 4,
                    title: 'Biblia',
                    autor: 'Dios',
                    ubicación: 'El cielo'
                }
            ]
            const book = booksDB.find(book => book.id === id)
            if (book) {
                resolve(book)
            } else {
                reject('manito no kcho na que me tai hablando en xino o k?')/*Observación: La persona que atiende tiene un 130 de IQ y solo se sabe los libros por ID.*/
            }
        }, 1000)
    })
    return promise
}
const promise1 = getBookById(1)
const promise2 = getBookById(2)
const promise3 = getBookById(4)

Promise.allSettled([promise1, promise2, promise3])
.then((res)=>{
    console.log('Se encontaron los libros =>', res)
})
.catch(err => {
    console.log(err)
})