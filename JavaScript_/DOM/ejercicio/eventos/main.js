/*const boton = document.getElementById("boton")
boton.addEventListener("click", (event) =>{
    console.log("has hecho click")
    console.log(event)
    event.target.textContent = "has hecho click acaaa xd"
})

boton.addEventListener("mouseover", (event) =>{
    event.target.textContent = "pasaste por aquí xd"
    event.target.style.color = "red"
})
boton.addEventListener("mouseout", (event) =>{
    event.target.textContent = "tefuistes XD"
    event.target.style.backgroundColor = "green"

})*/
const v1 = document.getElementById("v1")
console.log(v1)

const v2 = document.getElementById("v2")
console.log(v2)

const sumaButtom = document.getElementById("sumaButtom")
console.log(sumaButtom)
sumaButtom.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(v1.value, v2.value)
    const v1n = parseInt(v1.value)
    const v2n =parseInt(v2.value)
    const final = (v1n+v2n);
    const resu = document.getElementById("resultado")
    resu.innerHTML = resu.innerHTML + `<p> el resultado es ${final}</p>`


})
