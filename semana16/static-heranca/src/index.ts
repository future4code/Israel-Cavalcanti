import { User } from "./class/User";
import { Customer } from "./class/Customer";
import { Employee } from "./class/Employee";
import { Seller } from "./class/Seller";
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

// =========================================================
// EX 8. Criar classe Seller
// a. Crie uma instância da classe Seller. Você vai reparar que essa classe já possui um construtor, pois quando não colocamos um construtor na classe filha, ela herda o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?

// ID, EMAIL, NAME, PASSWORD, ADMISSIONDATE e BASESALARY -> Todos os parâmetros necessários para criar uma instância da classe Employee, pois a classe Seller é filha da Employee e não possui um construtor próprio. Dessa forma o seu construtor será herdado da sua classe pai:
const newSeller: Seller = new Seller(
  "04",
  "seller@labenu.com",
  "Seller Costa",
  "seller12345",
  moment("07/08/2020", "DD/MM/YYYY").format("DD/MM/YYYY"),
  2100
);

// b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê?

// O único item que não é possível imprimir é o PASSWORD, pois é um atributo PRIVATE que não possui um GETTER.

console.log("Id do novo vendedor: ", newSeller.getId());
console.log("Nome do novo vendedor: ", newSeller.getName());
console.log("Email do novo vendedor: ", newSeller.getEmail());
console.log(
  "A data de admissão do novo vendedor é: ",
  newSeller.getAdmissionDate()
);
console.log("O salário do novo vendedor é: ", newSeller.getBaseSalary());

// =========================================================
// EX 9. Criar nova propriedade na classe Seller
// a. Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?

// Não é possível, pois é uma propriedade PRIVATE e nào possui um GETTER para buscar o valor solicitado.

console.log("Valor antes de atualizar: ", newSeller.getSalesQuantity());
newSeller.setSalesQuantity(30);
console.log("Valor depois de atualizar: ", newSeller.getSalesQuantity());

// =========================================================
// EX 10. OVERRIDE(sobrepor)

const newSeller2: Seller = new Seller(
  "05",
  "seller02@labenu.com",
  "Seller02",
  "seller020202",
  moment("01/05/2020", "DD/MM/YYYY").format("DD/MM/YYYY"),
  200
);

// a. Crie um novo vendedor. Atribua a ele um valor para a salesQuantity. Convoque a função calculateTotalSalary e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?

// O valor total do novo seller. Isso acontece, pois, a classe Seller consegue sobrescrever a função do seu pai (calculateTotalSalary), alterando o seu cálculo com um novo formato.

newSeller2.setSalesQuantity(200);
console.log("Salário total do Seller02: ", newSeller2.calculateTotalSalary());

// =========================================================
// EX 11. Propriedades estáticas (valor do benefício e valor da comissão são estáticos!)

// Agora com os valores static nas classes Employee e Seller, os valores devem continuar iguais com base nas instâncias criadas.
