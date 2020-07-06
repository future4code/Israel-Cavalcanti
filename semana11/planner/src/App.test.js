import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, fireEvent, wait } from "@testing-library/react";
import axios from "axios";
import Planner from "../src/components/Planner";

test("Input está recebendo mensagem digitada", async () => {
  // PREPARAÇÃO
  axios.post = jest.fn().mockResolvedValue();

  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        day: "monday",
        text: "estudar",
        id: "0Nw80BqpXddZHArFqnBs",
      },
    ],
  });

  const {
    getByPlaceholderText,
    getByLabelText,
    queryByText,
    getByText,
  } = render(<Planner />);

  // VERIFICAÇÃO
  const input = getByPlaceholderText(/Digite aqui sua atividade/i);

  fireEvent.change(input, { target: { value: "estudar" } });

  // EXECUÇÃO
  expect(input).toHaveValue("estudar");

  // VERIFICAÇÃO
  const select = getByLabelText(/Selecione o dia:/i);
  userEvent.selectOptions(select, queryByText("Segunda-feira").value);

  const button = getByText(/Criar atividade/i);
  fireEvent.click(button);

  // EXECUÇÃO
  expect(axios.post).toHaveBeenCalledWith(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-israel-cavalcanti",
    {
      text: "estudar",
      day: "monday",
    }
  );
  await wait(() => expect(axios.get).toHaveBeenCalled());
  await wait(() => expect(getByText(/estudar/i)).toBeInTheDocument());
});
