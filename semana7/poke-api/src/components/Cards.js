import React from "react";
import styled from "styled-components";

const CardIndividual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 110px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 10px;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImagemPokemon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 5px;
`;

function Cards(props) {
  return (
    <CardIndividual>
      <Conteudo>
        <ImagemPokemon src={props.urlImagem} alt={props.altPokemon} />
        <p>POKEMON</p>
        <p>{props.nomeDoPokemon}</p>
      </Conteudo>
    </CardIndividual>
  );
}

export default Cards;
