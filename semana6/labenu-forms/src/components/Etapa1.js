import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <PerguntaAberta pergunta="1. Qual o seu nome?" />
        <PerguntaAberta pergunta="2. Qual a sua idade?" />
        <PerguntaAberta pergunta="3. Qual o seu email?" />
        <PerguntaFechada
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo",
          ]}
        />
      </div>
    );
  }
}

export default Etapa1;
