// TROCA DE PÁGINAS POR LINK
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { useBlockAccess } from "../Hooks/useBlockAccess";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  ContainerListTripPage,
  ContainerMediumList,
  Text,
  ContainerList,
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

export default function ListTripsPage() {
  const history = useHistory();

  // ESTADO PARA GUARDAR AS INFOS DE VIAGENS DA API
  const [trips, setTrips] = useState([]);

  //CUSTOM HOOK PARA VERIFICAR O TOKEN PARA ACESSO ÀS PÁGINAS PRIVADAS
  useBlockAccess();

  // SALVA NA CONST TOKEN O TOKEN QUE ESTÁ NO LOCAL STORAGE
  const token = window.localStorage.getItem("token");

  // FUNÇÃO PARA BUSCAR NA API (GET) AS INFORMAÇÕES DAS VIAGENS E GUARDÁ-LAS NO ESTADO
  const getTrips = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/israel-cavalcanti/trips`
      )
      .then((response) => {
        setTrips(response.data.trips);
      });
  };

  // APÓS A RENDERIZAÇÃO DA PÁGINA, FAÇA:
  useEffect(() => {
    getTrips();
  }, []);

  const goToDetails = (tripId) => {
    history.push(`/trips/details/${tripId}`);
    console.log(tripId);
  };

  // PARA APRESENTAR AS INFORMAÇÕES NA TELA, PRECISAMOS DE UM MAP PARA BUSCAR A INFORMAÇÃO DE CADA VIAGEM
  const mapTrip = trips.map((infoTrip) => {
    return (
      <tr>
        <th>{infoTrip.name}</th>
        <th>
          <MuiThemeProvider theme={theme}>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => goToDetails(infoTrip.id)}
            >
              Ver detalhes
            </Button>
            <Button>Deletar viagem</Button>
          </MuiThemeProvider>
        </th>
      </tr>
    );
  });

  // SE TIVER TOKEN, MOSTRARÁ A PÁGINA PRIVADA TRIPS/TRIPS. SE O USUÁRIO TENTAR ENTRAR PELO LINK DO NAVEGADOR SEM TER LOGIN, ELE CAIRÁ EM UMA PÁGINA VAZIA E NÃO VISUALIZARÁ A PÁGINA PRIVADA E VOLTARÁ PARA A PÁGINA DE LOGIN.
  if (token) {
    return (
      <ContainerListTripPage>
        <Helmet title="LabeX - Lista de viagens" />
        <Header>
          <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
          <HeaderButtons>
            <MuiThemeProvider theme={theme}>
              <Link to="/adm">
                <Button color="primary" variant="outlined" size="medium">
                  Voltar
                </Button>
              </Link>
            </MuiThemeProvider>
          </HeaderButtons>
        </Header>
        <ContainerMediumList>
          <Text>
            <h1>Lista de vigens criadas</h1>
          </Text>
          <ContainerList>
            <table>{mapTrip}</table>
          </ContainerList>
        </ContainerMediumList>
      </ContainerListTripPage>
    );
  } else {
    return <div>ACESSO NEGADO</div>;
  }
}
