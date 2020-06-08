import React from "react";
import styled from "styled-components";
import HomePage from "./components/HomePage.js";
import ListPage from "./components/ListPage";
//import LoginPage from "./components/LoginPage";

const AppContainer = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentPage: "HomePage",
  };

  changePage = () => {
    if (this.state.currentPage === "HomePage") {
      this.setState({ currentPage: "ListPage" });
    } else {
      this.setState({ currentPage: "HomePage" });
    }
  };

  render() {
    if (this.state.currentPage === "HomePage") {
      return (
        <AppContainer>
          <HomePage viewListPage={this.changePage} />
        </AppContainer>
      );
    } else {
      return (
        <AppContainer>
          <ListPage backToHome={this.changePage} />
        </AppContainer>
      );
    }
  }
}

export default App;
