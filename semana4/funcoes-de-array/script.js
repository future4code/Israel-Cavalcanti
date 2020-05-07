console.log("DESPESAS")

let arrayInserido = []

function cadastrarDespesa(){
    event.preventDefault()

    let valorInserido       = document.getElementById("input-valor-inserido")
    let tipoDespesa         = document.getElementById("selec-tipo-despesa")
    let descricaoDespesa    = document.getElementById("input-descricao-inserida")

    let objetoDespesa = {
        valor       : valorInserido,
        tipo        : tipoDespesa,
        descricao   : descricaoDespesa
    }

    if(objetoDespesa.valor === "" || objetoDespesa.descricao === ""){
        alert("Verifique se todos os campos foram preenchidos!")
    } else{
        arrayInserido.push(objetoDespesa)
        console.log("Cadastro efetivado!")
        console.log(arrayInserido)
    }

    document.getElementById("input-valor-inserido").value     = ""
    document.getElementById("selec-tipo-despesa").value       = ""
    document.getElementById("input-descricao-inserida").value = ""

console.log(objetoDespesa.valor)
console.log(objetoDespesa.tipo)
console.log(objetoDespesa.descricao)
}

