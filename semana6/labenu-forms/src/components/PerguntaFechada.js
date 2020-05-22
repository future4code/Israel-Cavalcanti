import React from "react";

function PerguntaFechada({ pergunta, opcoes }) {
  const opcao = opcoes.map((opcao) => (
    <option value={opcao} key={opcao}>
      {opcao}
    </option>
  ));

  return (
    <form>
      <label>{pergunta}</label>
      <br />
      <select>{opcao}</select>
    </form>
  );
}

export default PerguntaFechada;
