import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// 1.
test('Inserir algo no input e ao clicar no botão "Adicionar" um novo item é adicionado à lista de posts ', async () => {
  // PREPARAÇÃO
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);

  //EXECUÇÃO
  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar); // ou:

  //VERIFICAÇÃO
  /* Pode ser assim:
  let postDigitado = getByTestId(/text/i);
  wait(() => { --> para API
    expect(postDigitado).toHaveTextContent("teste");
  });
*/ expect(
    getByTestId("postDigitado")
  ).toHaveTextContent("teste");
  // ou:
  expect(getByTestId("postDigitado")).toBeInTheDocument();
});

// 2.
test("Ao clicar no botão de curtir, apareça o botão descurtir", () => {
  // PREPARAÇÃO
  const { getByText, getByPlaceholderText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);
  //EXECUÇÃO
  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar);
  const buttonCurtir = getByText(/Curtir/i);
  fireEvent.click(buttonCurtir);
  //VERIFICAÇÃO
  const buttonDescurtir = getByText(/Descurtir/i);
  expect(buttonDescurtir).toHaveTextContent(/Descurtir/i);
});

// 3.
test("Ao clicar em apagar post, o post deve sumir da tela", () => {
  // PREPARAÇÃO
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);

  //EXECUÇÃO
  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar);
  const buttonApagar = getByText(/Apagar/i);
  fireEvent.click(buttonApagar);
  const checkTask = queryByText("teste");
  //VERIFICAÇÃO
  expect(checkTask).toEqual(null);
});
//======================================================================
const createTask = () => {
  const task = render(<App />);
  const inputPost = task.getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = task.getByText(/Adicionar/i);

  fireEvent.change(inputPost, { target: { value: "teste" } });
  fireEvent.click(buttonAdicionar);

  return task;
};
//======================================================================

// 4.
test("Ao criar um post, o input deve ser limpo", () => {
  const { getByPlaceholderText } = createTask();
  const inputTask = getByPlaceholderText(/Novo post/i).value;

  //VERIFICAÇÃO
  expect(inputTask).toEqual("");
});

// 5.
test("Quando a lista está vazia no início, deve aparecer a mensagem 'Nenhum post'", () => {
  const { getByText } = render(<App />);
  const postList = getByText(/Nenhuma Mensagem/i);

  expect(postList);
});

// 6.
test("Se existir 1 post, deve mostrar 'Quantidade de posts: 1", () => {
  const { getByText } = createTask();
  const postQuantity = getByText(/1/i);

  expect(postQuantity).toHaveTextContent(/Quantidade de posts: 1/i);
});

// 7.
test("Se um usuário enviar uma mensagem vazia, deve aparecer a mensagem 'Digite algo para enviar'", () => {
  const { getByText } = render(<App />);
  const buttonAdicionar = getByText(/Adicionar/i);

  fireEvent.click(buttonAdicionar);
  expect(getByText(/Digite algo para enviar/)).toBeInTheDocument();
});
