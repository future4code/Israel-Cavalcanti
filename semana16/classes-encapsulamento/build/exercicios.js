"use strict";
//Analise a classe UserAccount. Perceba quais propriedades são públicas e quais são privadas.
// 1) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// O CONSTRUCTOR É UM MÉTODO QUE SERVE PARA CRIAR E INICIALIZAR UM OBJETO CRIADO A PARTIR DE UMA CLASSE
// 2) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf, dataDeNascimento ou idade, etc que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
/*
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  //   private transactions: Transaction[];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  // public getBalance(): number {
  // //Aqui deve ser inserida a lógica de pegar saldo do usuário
  // }

  // public addBalance(value: number): void {
  // //Aqui deve ser inserida a lógica de adicionar saldo
  //   console.log('Saldo atualizado com sucesso')
  // }
}

const contas: UserAccount = new UserAccount("0000", "Israel", 26);

console.log(contas);
*/
// COM O CÓDIGO ACIMA, APENAS UMA VEZ SERÁ IMPRESSA NO TERMINAL
// 3) Como conseguimos ter acesso às propriedades privadas de uma classe?
// NAO PODEMOS TER ACESSO, SOMENTE ATRAVÉS DE MÉTODOS PARA TAL
// 4) Com os métodos fornecidos pela classe, seria possível imprimir alguma das propriedades da classe no terminal? Se sim, realize a impressão.
class UserAccount {
    //   private transactions: Transaction[];
    constructor(cpf, name, age) {
        this.balance = 0;
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getBalance() {
        return this.balance;
    }
    // OU
    // public getBalance = (): number => this.balance
    addBalance(value) {
        this.balance += value;
        console.log("Saldo atualizado com sucesso: " + this.balance);
    }
}
const minhaConta = new UserAccount("0000", "Israel", 26);
minhaConta.addBalance(15);
// const saldoAtualizado = ;
console.log(minhaConta.getBalance());
//console.log(contas);
