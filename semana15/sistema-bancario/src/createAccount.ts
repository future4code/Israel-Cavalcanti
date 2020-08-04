import * as moment from "moment";
import { writeToDatabase } from "./fileSystem";
import { BankAccount } from "./types";
import printAllAccounts from "./printallAccounts";
import getAllAccounts from "./getAllAccounts";

// FUNÇÃO PARA CRIAR UMA CONTA BANCÁRIA
const createAccount = (name: string, cpf: number, birthday: string): void => {
  // VERIFICA SE É MAIOR DE 18
  if (moment().diff(moment(birthday, "DD/MM/YYYY"), "years") < 18) {
    console.log("Idade inválida. Você precisa ter mais de 18 anos!");
    return;
  }

  // PEGA TODAS CONTAS EXISTENTES
  const accounts: BankAccount[] = getAllAccounts();

  //VERIFICA O CPF
  for (const account of accounts) {
    if (account.cpf === cpf) {
      console.log("CPF inserido já cadastrado!");
      return;
    }
  }

  // CRIA NOVA CONTA
  const newAccount: BankAccount = {
    name,
    cpf,
    birthday: moment(birthday, "DD/MM/YYYY").unix(),
    balance: 0,
    transactions: [],
  };
  // ADICIONA A NOVA CONTA NO ARRAY DE CONTAS
  accounts.push(newAccount);

  //
  writeToDatabase(accounts);

  // MOSTRA TODAS AS CONTAS EXISTENTES
  printAllAccounts();
  console.log("Conta criada com sucesso!\n");
};

export default createAccount;
