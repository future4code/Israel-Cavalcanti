import React from "react";
import styled from "styled-components";
import ListPage from "./components/ListPage";
import LoginPage from "./components/LoginPage";

const AppContainer = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentPage: "signUp",
  };

  // =====================
  // clicando no botao, se estiver signUp, mudar para o estado para userList. Se não, mudar o estado para signUp. Isso afetará o que será renderizado do if conforme a situação do estado aqui alterado.
  onClickChangePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "userList" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };
  // =====================

  render() {
    //Se o estado estiver signUp, mostrar o componente LoginPage
    if (this.state.currentPage === "signUp") {
      return (
        <AppContainer>
          <LoginPage viewListPage={this.onClickChangePage} />
        </AppContainer>
      );
    } //Se o estado estiver diferente de signUp, mostrar o componente ListPage
    else {
      return (
        <AppContainer>
          <ListPage backToLogin={this.onClickChangePage} />
        </AppContainer>
      );
    }
    // Ou ao invés de usar o if-else, podemos utilizar o ternário para um código mais limpo da seguinte forma:
    // {this.state.currentPage === "signUp" ? "Sim: Mostrar o componente <LoginPage />" : "Nao: Mostrar o componente <ListPage />"}
    // Assim evitam-se várias linhas de código, mas funciona da mesma forma
  }
}
export default App;
