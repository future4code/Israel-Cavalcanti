import * as moment from "moment";
import { Account } from "./Account";
import { JSONFileManager } from "./JSONFileManager";
import { Transaction } from "./Transaction";

export class Bank {
  // Para ler e escrever os dados no arquivo data.json:
  private fileManager: JSONFileManager = new JSONFileManager();
  private accounts: Account[] = [];

  // Constructor não recebe nada, mas serve para ler o banco de dados data.json
  constructor() {
    // Como os objetos do data.json não são instâncias da classe Account, é preciso ler o arquivo e depois transformá-los em instâncias novamente. Então, em fileData está sendo guardado tudo aquilo do data.json como instância:
    const fileData: any = this.fileManager.readDataBase();
    // Agora podemos mapear os objetos do fileData:
    this.accounts = fileData.map((item: any) => {
      const transactions = item.transactions.map(
        (transaction: any) =>
          new Transaction(
            transaction.value,
            transaction.description,
            transaction.date
          )
      );
      return new Account(
        item.name,
        item.cpf,
        item.birthDate,
        item.balance,
        transactions
      );
    });
  }

  // Para criar uma nova conta: case "createAccount" (não tem retorno: void)
  createAccount(name: string, cpf: string, birthDate: string): void {
    // VERIFICAÇÃO: Se o CPF inserido não pode existir no banco de dados:
    const duplicateAccount: Account | undefined = this.accounts.find(
      (account) => {
        return account.getCpf() === cpf;
      }
    );
    // Se a duplicateAccount for TRUE (já existir um CPF):
    if (duplicateAccount) {
      throw new Error("CPF informado já cadastrado!");
    }

    // O dado de data de nascimento inserido pelo usuário precisa ser tradado:
    const birthDateAsObject = moment(birthDate, "DD/MM/YYYY");
    // VALIDAÇÃO: para identificar quantos anos o usuário possui:
    const age = moment().diff(birthDateAsObject, "years");
    // Se for maior que 18, não poderá criar a conta:
    if (age < 18) {
      throw new Error("O usuário deve ser maior de idade!");
    }

    // Se passar pelas validações, agora pode-se criar uma nova conta:
    this.accounts.push(new Account(name, cpf, birthDate));

    // Para salvar os dados inseridos pelo usuário no data.json:
    this.fileManager.writeToDataBase(this.accounts);
  }

  // Para saber o saldo da conta: case "getBalance" (O retorno do será o saldo: number)
  getBalance(name: string, cpf: string): number {
    // VERIFICAÇÃO: NOME e um CPF inseridos com o banco de dados:
    const userAccount: Account | undefined = this.accounts.find((account) => {
      return account.getCpf() === cpf && account.getName() === name;
    });
    // Se e se não existir:
    if (userAccount) {
      return userAccount.getBalance();
    } else {
      throw new Error(
        "Usuário não encontrado. Verifique novamente as informações inseridas."
      );
    }
  }

  // Para adicionar saldo à conta: case "addBalance" (Não tem retorno: void)
  addBalance(name: string, cpf: string, value: number): void {
    // Precisamos guardar a data da transação:
    const date: string = moment().format("DD/MM/YYYY");
    // Dizer qual é o tipo da transação:
    const description: string = "Depósito de dinheiro";

    // Verificação
    this.accounts.forEach((account) => {
      if (account.getCpf() === cpf && account.getName() === name) {
        account.addTransaction(new Transaction(value, description, date));
      }
    });

    // Salvar os dados inseridos no data.json
    this.fileManager.writeToDataBase(this.accounts);
  }

  // Para pagar uma conta: case "payBill" (Não tem retorno: void)
  payBill(
    cpf: string,
    value: number,
    description: string,
    date: string = moment().format("DD/MM/YYYY")
  ): void {
    value = Number(value);
    // Verificação do CPF inserido:
    this.accounts.forEach((account) => {
      const dateAsObject = moment(date, "DD/MM/YYYY");

      if (
        account.getCpf() === cpf &&
        value < account.getBalance() &&
        dateAsObject.diff(moment(), "days") >= 0
      ) {
        account.addTransaction(new Transaction(value * -1, description, date));
        // Para salvar essa operação no data.json:
        this.fileManager.writeToDataBase(this.accounts);
        console.log("Transação efetuada com sucesso!");
      } else {
        throw new Error("Sua transação não foi efetuada. Revise os dados!");
      }
    });
  }

  updateBalance() {
    this.accounts.forEach((account) => {
      account.calculateBalance();
    });
    this.fileManager.writeToDataBase(this.accounts);
  }

  makeTransfer(
    depositaryName: string,
    depositaryCpf: string,
    recipientName: string,
    recipientCpf: string,
    value: number
  ): void {
    const depositaryAccount: Account | undefined = this.accounts.find(
      (account) => {
        return (
          account.getCpf() === depositaryCpf &&
          account.getName() === depositaryName
        );
      }
    );

    const recipientAccount: Account | undefined = this.accounts.find(
      (account) => {
        return (
          account.getCpf() === recipientCpf &&
          account.getName() === recipientName
        );
      }
    );

    if (!depositaryAccount || !recipientAccount) {
      throw new Error("Contas não encontradas");
    }

    this.accounts.forEach((account) => {
      if (
        account.getCpf() === depositaryCpf &&
        account.getName() === depositaryName
      ) {
        account.addTransaction(
          new Transaction(value * -1, "Transferência entre contas")
        );
      }
      if (
        account.getCpf() === recipientCpf &&
        account.getName() === recipientName
      ) {
        account.addTransaction(
          new Transaction(value, "Transferência entre contas")
        );
      }
    });
    this.fileManager.writeToDataBase(this.accounts);
  }
}
