// TROCA DE PÁGINAS POR HISTORY
import React from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import logoLabeX from "../../assets/logo_white.png";
import {
  ContainerHomePage,
  LabeX,
  ContainerMediumHome,
  ContainerButton,
} from "../Styles/Styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF8000",
    },
    secondary: {
      main: "#FDFDFD",
    },
  },
});

export default function HomePage() {
  const history = useHistory();

  // (ONCLICK) - FUNÇÃO PARA REDIRECIONAR O USUÁRIO PARA A PÁGINA DE FORMULÁRIO
  const goToApplicationForm = () => {
    history.push("/application-form");
  };

  // (ONCLICK) - FUNÇÃO PARA REDIRECIONAR O USUÁRIO PARA A PÁGINA DE LOGIN DO ADM
  const goToLogin = () => {
    history.push("/login-adm");
  };

  return (
    <ContainerHomePage>
      <ContainerMediumHome>
        <Helmet title="LabeX - HomePage" />
        <LabeX src={logoLabeX} alt="Logo-LabeX" />
        <ContainerButton>
          <MuiThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="medium"
              onClick={goToApplicationForm}
            >
              Candidatar-me
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={goToLogin}
            >
              Login ADM
            </Button>
          </MuiThemeProvider>
        </ContainerButton>
      </ContainerMediumHome>
    </ContainerHomePage>
  );
}
