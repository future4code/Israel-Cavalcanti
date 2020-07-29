// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const soma: number = Number(process.argv[3]) + Number(process.argv[4]);
const subtracao: number = Number(process.argv[3]) - Number(process.argv[4]);
const multiplicacao: number = Number(process.argv[3]) * Number(process.argv[4]);
const divisao: number = Number(process.argv[3]) / Number(process.argv[4]);

const operator: string = process.argv[2];

if (operator === "add") {
  console.log(`A soma entre os números é ${soma}`);
} else if (operator === "sub") {
  console.log(`A subtracao entre os números é ${subtracao}`);
} else if (operator === "mult") {
  console.log(`A multiplicacao entre os números é ${multiplicacao}`);
} else if (operator === "div") {
  console.log(`A divisao entre os números é ${divisao}`);
}

// switch (operator){
//   case "add":
//     console.log(`A soma entre os números é ${soma}`);
//     break;
//   case "sub":
//     console.log(`A subtracao entre os números é ${subtracao}`);
//     break;
//   case "mult":
//     console.log(`A multiplicacao entre os números é ${multiplicacao}`);
//     break;
//   case "div":
//     console.log(`A divisao entre os números é ${divisao}`);
//     break;
//   default:
//     console.log("Validacao nao encontrada !")
// }
