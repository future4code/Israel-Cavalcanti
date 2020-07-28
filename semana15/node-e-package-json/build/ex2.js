const soma = Number(process.argv[3]) + Number(process.argv[4]);
const subtracao = Number(process.argv[3]) - Number(process.argv[4]);
const multiplicacao = Number(process.argv[3]) * Number(process.argv[4]);
const divisao = Number(process.argv[3]) / Number(process.argv[4]);
const operator = process.argv[2];
if (operator === "add") {
    console.log(`A soma entre os números é ${soma}`);
}
else if (operator === "sub") {
    console.log(`A subtracao entre os números é ${subtracao}`);
}
else if (operator === "mult") {
    console.log(`A multiplicacao entre os números é ${multiplicacao}`);
}
else if (operator === "div") {
    console.log(`A divisao entre os números é ${divisao}`);
}
//# sourceMappingURL=ex2.js.map