import { Transaction } from "./Transaction";
import * as moment from "moment";

export class Account {
  //
  constructor(
    private name: string,
    private cpf: string,
    private birthDate: string,
    // Começar com o saldo 0:
    private balance: number = 0,
    private transactions: Transaction[] = []
  ) {}
  // GETTERS:
  getName = () => this.name;
  getCpf = () => this.cpf;
  getBirthDate = () => this.birthDate;
  getBalance = () => this.balance;
  getTransactions = () => this.transactions;

  // SETTERS
  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  calculateBalance(): void {
    this.balance = 0;
    this.transactions.forEach((transaction) => {
      // Data de hoje:
      const today: moment.Moment = moment();
      // Data da transação:
      const dateAsObject = moment(transaction.getDate(), "DD/MM/YYYY");
      // A diferença entre as datas:
      const difference = today.diff(dateAsObject, "days");

      if (difference >= 0) {
        this.balance += transaction.getValue();
      }
    });
    console.log(this.getBalance());
  }
}
