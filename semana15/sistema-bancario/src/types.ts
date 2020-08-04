// CustomerAccount - Conta bancária
export type BankAccount = {
  name: string;
  cpf: number;
  birthday: number;
  balance: number;
  transactions: Transaction[];
};
// Tipos de transações bancárias
export enum TransactionsEnum {
  ADD_BALANCE = 0,
  PAY_BILL = 1,
  TRANSFER_SENT = 2,
  TRANSFER_RECEIVED = 3,
}
// Dados da transação bancária
export type Transaction = {
  type: TransactionsEnum;
  amount: number;
  date: number;
  description: string;
  completed: boolean;
};
