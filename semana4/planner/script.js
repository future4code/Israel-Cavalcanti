function adicionaTarefa(){
    let input = document.getElementById("digite").value
    let diaSemana = document.getElementById("selecDia").value
    switch(diaSemana){
        case "segunda":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;
        case "terca":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;
        case "quarta":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;
        case "quinta":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;
        case "sexta":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;
        case "sabado":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;
        case "domingo":
            document.getElementById(`${diaSemana}`).innerHTML += `<li> ${input} </li>`
            break;       
    }
    digite.value = ""
} 