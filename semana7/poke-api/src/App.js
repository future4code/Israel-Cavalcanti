import React from "react";
import styled from "styled-components";

// =========================================================
const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.imgur.com/2gfwG.png");
`;

const Header = styled.header`
  text-align: center;
`;

const Main = styled.main`
  text-align: center;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
`;
// =========================================================
const LogoPokemon = styled.img`
  margin: 20px;
`;

const LogoPokebola = styled.img`
  margin: 20px;
  width: 200px;
  height: 200px;
`;

function App() {
  return (
    <Body>
      <Header>
        <LogoPokemon
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Logo-Pokemon"
        />
      </Header>
      <Main>CARDS</Main>
      <Footer>
        <LogoPokebola
          src="http://pngimg.com/uploads/pokeball/pokeball_PNG11.png"
          alt="Pokebola"
        />
      </Footer>
    </Body>
  );
}

export default App;
