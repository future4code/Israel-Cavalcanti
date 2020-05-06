const input = document.getElementById("digite")
const listas = document.getElementById("uLista")

//console.log(input)
//console.log(listas)

function adicionaTarefa(){
    let tarefa = digite.value
    listas.innerHTML += `<li>${tarefa}</li>`
    digite.value = ""
}