export class User {
  // Os atributos são privados, logo, só podem ser acessados diretamente de dentro dessa classe.
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }
  // Para poder acessar os atributos dessa classe em outra, criamos os GETTERS publicos:
  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
  // Adicionado pelo exercicio 4:
  public introduceYourself4(): void {
    console.log("Olá, bom dia!");
  }

  // Adicionado pelo exercicio 5:
  public introduceYourself5(): void {
    console.log(`Olá, sou ${this.name}. Bom dia!`);
  }
}
