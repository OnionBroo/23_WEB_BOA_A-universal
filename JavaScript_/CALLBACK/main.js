/*
const getBooksCB = (callback) => {
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
        callback(booksDB)
        return booksDB;
    }, 2000)
}


const booksCB = getBooksCB((books)=>{
    console.log(books)
}) 
*/


const getBookById = (id, callback) => {
    setTimeout(() => {
        const booksDB = [
            {
                id: 1,
                title: "Nunca te pares",
                autor: 'Phil Knight',
                tag: 'Emprendimiento'
            },
            {
                id: 2,
                title: 'Los lideres comen al final',
                autor: 'Simon Sinek',
                tag: 'Auto-conocimiento'
            },
            {
                id: 3,
                title: 'Hábitos Atómicos',
                autor: 'James Clear',
                tag: 'Auto-conocimiento'
            }
        ]
        const book = booksDB.find(book => book.id === id)
        if(!book /*!null !false true */){
            const error = new Error;
            error.message = 'Libro no encontrado'
            return callback(error, null)
        } else {
            callback(null, book)
        }
    }, 2000)
}
getBookById(
    1,
    (err, book) => {
        if(err){
            return console.log(err.message)
        } else {
            console.log(book)
        }
    }
);