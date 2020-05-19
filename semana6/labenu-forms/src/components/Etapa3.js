import React from "react";

function Etapa3() {
  return (
    <div>
      <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
      <form>
        <label>5. Por que você não terminou um curso de graduação?</label>
        <br />
        <input type="text" placeholder="Digite o motivo"></input>

        <br />
        <label>6. Você fez algum curso complementar?</label>
        <br />
        <select>
          <option value="Nenhum">Nenhum</option>
          <option value="Curso-Tecnico">Curso técnico</option>
          <option value="Curso-Ingles">Curso de inglês</option>
        </select>
      </form>
    </div>
  );
}

export default Etapa3;
