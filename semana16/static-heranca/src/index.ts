import { User } from "./class/User";
import { Customer } from "./class/Customer";
import { getDiffieHellman } from "crypto";
import { Employee } from "./class/Employee";
import moment from "moment";

// No index ficam as instâncias
// Instância de User (Usuário):
const newUser: User = new User(
  "01",
  "israel@labenu.com",
  "Israel",
  "password123"
);

console.log(newUser); // Ao imprimir dessa forma, o terminal retorna "Chamando o construtor da classe User" (que é impesso quando o construtor da classe é utilizado) e todas as informações paassadas acima no newUser.

// Para retornar as informações de email, nome ou Id:
console.log("Id do novo usuário: ", newUser.getId()); // Imprime 01
console.log("Nome do novo usuário: ", newUser.getEmail()); // Imprime israel@labenu.com
console.log("Email do novo usuáiro: ", newUser.getName()); // Impime Israel

// EX 1. ANALISE DA CLASSE USER
// a. Seria possível imprimir a senha (password) atrelada a essa instância?
// Não é possível pois o atributo password possui encapsulamento private, e não há um getter para o password.
/*
console.log(newUser.password)
console.log(newUser.getPassword())
*/

// b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// É chamado apenas uma vez, pois foi construído apenas um novo usuário

// =========================================================
// EX 2. ANALISE DA CLASSE CUSTOMER
// a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?

// Instância de Customer (Cliente):
const newCustomer: Customer = new Customer(
  "02",
  "joao@labenu.com",
  "Joao",
  "password123",
  "012345"
);

// a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// Apenas uma vez, pois, o new customer é chamado apenas uma vez.

// b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// Duas vezes: a primeira quando chama o construtor da classe filha pelo new Customer, e a segunda quando chama o construtor da classe pai new User. --- Ao chamar o construtor da classe filha, chama-se também o construtor da classe pai.

// =========================================================
// EX 3. ANALISE DA CLASSE CUSTOMER
// O id, name e email são hedados da classe User, e podemos acessá-los da mesma forma como se estivesse na classe user:
console.log("Id do novo consumidor: ", newCustomer.getId());
console.log("Nome do novo consumidor: ", newCustomer.getName());
console.log("Email do novo consumidor: ", newCustomer.getEmail());
// Já o creditCard é um atributo PRIVATE da classe, logo necessita de um GETTER para ser acessado de fora da classe:
console.log(
  "Cartao de crédito do novo consumidor: ",
  newCustomer.getCreditCard()
);
// Como o purchaseTotal é um atributo PUBLIC, não precisou criar um Getter para ele, logo, podemos acessá-lo diretamente:
console.log("total da compra do novo consumidor: ", newCustomer.purchaseTotal);

// a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não, pois o password é um atributo privado da classe pai (User), e só pode ser acessado de dentro dela (User).

// =========================================================
// EX 4. ANALISE DA CLASSE USER
newCustomer.introduceYourself4();

// =========================================================
// EX 5. Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.
newCustomer.introduceYourself5();

// =========================================================
// EX 6. Criar nova classe Employee
const newEmpolyee: Employee = new Employee(
  "03",
  "employee@laabenu.com",
  "Employee Silva",
  "employee1234",
  moment("06/08/2020", "DD/MM/YYYY").format("DD/MM/YYYY"),
  1500
);

console.log(newEmpolyee);

// a. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Três vezes, as duas anteriores e mais uma pois o Employee também é filho do User

// b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?

console.log("Id do novo funcionário: ", newEmpolyee.getId());
console.log("Nome do novo funcionário: ", newEmpolyee.getName());
console.log("Email do novo funcionário: ", newEmpolyee.getEmail());
console.log(
  "A data de admissão do novo funcionário é: ",
  newEmpolyee.getAdmissionDate()
);
console.log("O salário do novo funcionário é: ", newEmpolyee.getBaseSalary());

// =========================================================
// EX 7. Adicionar novo método ao Employee
console.log(
  "O valor total do salário com benefícios é: ",
  newEmpolyee.calculateTotalSalary()
);
