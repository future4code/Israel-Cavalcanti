import React, { useState, useEffect } from "react";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import ButtonChangeToMatches from "@material-ui/core/Button";

import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import DeclineIcon from "@material-ui/icons/HighlightOff";
import UpdateIcon from "@material-ui/icons/Update";

import {
  Container,
  ImageProfile,
  ContainerCard,
  Header,
  Footer,
  InfoProfile,
} from "./Styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#FF0000",
    },
  },
});

export default function ProfilePage(props) {
  const [getProfile, setGetProfile] = useState({});

  // FUNÇÃO PARA ALIMENTAR O ESTADO GETPROFILE COM AS INFOS
  const profiles = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/israel-cavalcanti/person"
      )
      .then((response) => {
        setGetProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ONCLICK PARA ENVIAR PARA A API SE O "CHOICE" É TRUE OU FALSE
  const onClickSendChoice = (value) => {
    const body = {
      id: getProfile.id,
      choice: value,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/israel-cavalcanti/choose-person",
        body
      )
      .then((response) => {
        profiles();

        if (response.data.isMatch === true) alert("Deu match!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // PARA RESETAR OS MATCHES E OS PROFILES
  const resetProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/israel-cavalcanti/clear"
      )
      .then(() => {
        profiles();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // USEEFFECT PARA QUANDO CARREGAR A PÁGINA, SER CARREGADO NO ESTADO UM PROFILE ALEATÓRIO (API) E COM AS INFOS DELE, EXECUTAR O JSX
  useEffect(() => {
    profiles();
  }, []);

  return (
    <Container>
      <ContainerCard>
        <Header>
          <h2>Astromatch</h2>
          <ButtonChangeToMatches
            onClick={props.changePage}
            size="small"
            variant="outlined"
          >
            Ver Matches
          </ButtonChangeToMatches>
        </Header>
        <InfoProfile>
          <ImageProfile src={getProfile.photo} alt="imagem" />
          <h3>
            {getProfile.name}, {getProfile.age}
          </h3>
          <p>{getProfile.bio}</p>
        </InfoProfile>
        <Footer>
          <MuiThemeProvider theme={theme}>
            <CheckIcon
              onClick={() => onClickSendChoice(true)}
              cursor="pointer"
              color="primary"
            >
              Sim
            </CheckIcon>
            <DeclineIcon
              onClick={() => onClickSendChoice(false)}
              cursor="pointer"
              color="secondary"
            >
              Não
            </DeclineIcon>
          </MuiThemeProvider>
        </Footer>
        <UpdateIcon onClick={resetProfiles} size="small" cursor="pointer">
          Reset
        </UpdateIcon>
      </ContainerCard>
    </Container>
  );
}
