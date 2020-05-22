import React from "react";

function PerguntaAberta(props) {
  return (
    <form>
      <label>{props.pergunta}</label>
      <br />
      <input type="text"></input>
    </form>
  );
}

/* Ou podemos usar a desestruturação de props:
function PerguntaAberta({pergunta}) {
  return (
    <form>
      <label>{pergunta}</label>
      <br />
      <input type="text"></input>
    </form>
  );
}
*/
export default PerguntaAberta;
