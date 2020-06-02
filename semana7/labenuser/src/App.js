import React from "react";
import styled from "styled-components";
import List from "./components/List";
import Login from "./components/Login";

const AppContainer = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    loginNaTela: true,
  };
  onClickLoginOrLogout = () => {
    this.setState({ loginNaTela: !this.state.loginNaTela });
  };

  onClickSalvou = () => {
    alert("Dados enviados!");
  };

  render() {
    if (this.state.loginNaTela) {
      return (
        <AppContainer>
          <Login clicouSave={this.onClickSalvou} />
        </AppContainer>
      );
    } else {
      return (
        <AppContainer>
          <List fazerLogout={this.onClickLoginOrLogout} />
        </AppContainer>
      );
    }
  }
}
export default App;
