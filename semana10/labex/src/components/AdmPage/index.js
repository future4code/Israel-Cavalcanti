// TROCA DE PÁGINAS POR LINK e HISTORY (logout)
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { useBlockAccess } from "../Hooks/useBlockAccess";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  ContainerADMPage,
  ContainerMediumADM,
  Text,
  ContainerButtonsADM,
  LabeXHeader,
  Header,
  HeaderButtons,
} from "../Styles/Styles";
import logoLabeX from "../../assets/logo_white.png";

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

export default function AdmPage() {
  const history = useHistory();

  // CUSTOM HOOK PARA VERIFICAR O TOKEN PARA ACESSO ÀS PÁGINAS PRIVADAS
  useBlockAccess();

  // (ONCLICK) - FUNÇÃO PARA DESLOGAR (remover o token existente E voltar à página Home)
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <ContainerADMPage>
      <Helmet title="LabeX - ADM" />
      <Header>
        <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
        <HeaderButtons>
          <MuiThemeProvider theme={theme}>
            <Link to="/">
              <Button color="primary" variant="outlined" size="medium">
                Voltar para Home
              </Button>
            </Link>
            <Button variant="contained" size="medium" onClick={logout}>
              Logout
            </Button>
          </MuiThemeProvider>
        </HeaderButtons>
      </Header>
      <ContainerMediumADM>
        <Text>
          <h1>Let's go to work!</h1>
          <h3>Você está logado como: {window.localStorage.getItem("email")}</h3>
        </Text>
        <ContainerButtonsADM>
          <MuiThemeProvider theme={theme}>
            <Link to="/trips/create">
              <Button color="primary" variant="outlined" size="medium">
                Criar Viagem
              </Button>
            </Link>
            <Link to="/trips/list">
              <Button color="primary" variant="outlined" size="medium">
                Listar Viagens
              </Button>
            </Link>
            <Link to="/trips/details/:id">
              <Button color="primary" variant="outlined" size="medium">
                Detalhar Viagens
              </Button>
            </Link>
          </MuiThemeProvider>
        </ContainerButtonsADM>
      </ContainerMediumADM>
    </ContainerADMPage>
  );
}
