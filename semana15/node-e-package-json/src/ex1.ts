// a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?
// Atraves da propriedade process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
//"Olá, (Nome)! Você tem (sua idade) anos."
export {};

const name: string | undefined = process.argv[2];
const age: number = Number(process.argv[3]);

console.log(`Olá, ${name}! Você tem ${age} anos`);

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
const soma: number = 7 + age;
console.log(`Olá, ${name}! Em sete anos você terá ${soma} anos!`);
