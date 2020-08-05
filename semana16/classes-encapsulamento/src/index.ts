import { Bank } from "./Bank";
import { Account } from "./Account";
import { Transaction } from "./Transaction";

const bank: Bank = new Bank();
// Como este é o arquivo lido, precisamos guardar a informação do tipo de ação inserido pelo usuário:
const action: string = process.argv[2];

// Ações possíveis de serem inseridas pelo usuário:
switch (action) {
  case "createAccount":
    bank.createAccount(process.argv[3], process.argv[4], process.argv[5]);
    console.log(
      "Parabéns " + process.argv[3] + "!. Sua conta foi criada com sucesso!"
    );
    break;

  case "getBalance":
    const saldo = bank.getBalance(process.argv[3], process.argv[4]);
    console.log(
      "Olá " + process.argv[3] + `!. Seu saldo é de R$ ${saldo} reais.`
    );
    break;

  case "addBalance":
    bank.addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
    console.log("Valor de R$ " + process.argv[5] + " adicionado à sua conta!");
    break;

  case "payBill":
    bank.payBill(
      process.argv[3],
      Number(process.argv[4]),
      process.argv[5],
      process.argv[6]
    );
    break;

  case "updateBalance":
    bank.updateBalance();
    break;

  case "makeTransfer":
    bank.makeTransfer(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      process.argv[6],
      Number(process.argv[7])
    );
    break;

  default:
    console.log("Operação inválida!");
    break;
}
