//EX.4A
// Devemos fazer um mock da performAttack pois a inversão de dependências da função validateCharacter já está aplicada nela.

//EX.4B
test("Mock bem sucedido", () => {
  const mockSucess = jest.fn(() => {
    return true;
  });
});

//EX.4C
test("Mock falho", () => {
  const mockFail = jest.fn(() => {
    return false;
  });
});
