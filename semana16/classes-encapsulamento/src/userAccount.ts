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

  public getBalance(): number {
    return this.balance;
  }

  // OU
  // public getBalance = (): number => this.balance

  public addBalance(value: number): void {
    this.balance += value;
    console.log("Saldo atualizado com sucesso: " + this.balance);
  }
}

const minhaConta: UserAccount = new UserAccount("0000", "Israel", 26);

minhaConta.addBalance(15);

const saldoAtualizado = minhaConta.getBalance();

console.log(saldoAtualizado);

export default UserAccount;
