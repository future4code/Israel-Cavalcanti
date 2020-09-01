//import { User, performPurchase } from "./ex1";
import { Casino, LOCATION, User, NACIONALITY, verifyAge } from "./ex3";

/*
// EX.1
const usuario1: User = {
  balance: 100,
  name: "Israel",
};

console.log(performPurchase(usuario1, 50));
*/

// EX.3
const casino: Casino = {
  location: LOCATION.BRAZIL,
  name: "Casino do Zé",
};

const users: User[] = [
  {
    name: "Diego",
    nacionality: NACIONALITY.BRAZILIAN,
    age: 30,
  },
  {
    name: "Luiz",
    nacionality: NACIONALITY.BRAZILIAN,
    age: 15,
  },
];

// REMOVER BREAK DO ELSE IF NA FUNÇÃO VERIFYAGE
console.log(verifyAge(casino, users));
