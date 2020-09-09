import { User, performPurchase } from "../src/ex1";

// EX 2.A
test("Testando um saldo maior que o valor de compra", () => {
  const user: User = {
    name: "UsuarioA",
    balance: 100,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 50,
  });
});

// EX.2B
test("Testando um saldo igual ao valor de compra", () => {
  const user: User = {
    name: "UsuarioB",
    balance: 50,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 0,
  });
});

// EX.2C
test("Testando saldo menor que o valor de compra", () => {
  const user: User = {
    name: "UsuarioC",
    balance: 30,
  };

  const result = performPurchase(user, 40);

  expect(result).toEqual(undefined);
});
