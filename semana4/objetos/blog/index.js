
let array =[]

function botaoClique(){

  event.preventDefault()

  let postTitulo  = document.getElementById('input-titulo').value
  let postAutor   = document.getElementById('input-autor').value
  let postTexto   = document.getElementById('areaDoPost').value

  const objeto = {
    titulo: postTitulo,
    autor: postAutor,
    texto: postTexto
  }

  document.getElementById('input-titulo').value = ""
  document.getElementById('input-autor').value  = ""
  document.getElementById('areaDoPost').value   = ""

  array.push(objeto)
    
  console.log(objeto)

  postaDiv(objeto)
}

function postaDiv(objeto){
    document.getElementById('areaDaPostagem').innerHTML += `<h2>${objeto.titulo}</h2> <p>${objeto.autor}</p> <p>${objeto.texto}</p>`
}