import { BankAccount } from "./types";
import { readDatabase } from "./fileSystem";

// FUNÇÃO PARA PEGAR TODAS AS CONTAS EXISTENTES
const getAllAccounts = (): BankAccount[] => {
  // MAPEAR A BASE DE DADOS PARA PEGAR AS INFOS DE CADA CONTA
  const accounts: BankAccount[] = readDatabase().map((item: BankAccount) => {
    return {
      name: item.name,
      cpf: item.cpf,
      birthday: item.birthday,
      balance: item.balance,
      transactions: item.transactions,
    };
  });
  return accounts;
};

export default getAllAccounts;
