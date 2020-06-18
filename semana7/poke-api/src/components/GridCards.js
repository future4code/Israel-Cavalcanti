import React from "react";
import Cards from "./Cards";
import styled from "styled-components";

const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 700px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
`;

function components() {
  return (
    <ContainerCards>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=1"}
        altPokemon={"Nome do pokemon"}
      ></Cards>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=2"}
        altPokemon={"Nome do pokemon"}
      ></Cards>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=3"}
        altPokemon={"Nome do pokemon"}
      ></Cards>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=1"}
        altPokemon={"Nome do pokemon"}
      ></Cards>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=2"}
        altPokemon={"Nome do pokemon"}
      ></Cards>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=3"}
        altPokemon={"Nome do pokemon"}
      ></Cards>
    </ContainerCards>
  );
}

export default components;
