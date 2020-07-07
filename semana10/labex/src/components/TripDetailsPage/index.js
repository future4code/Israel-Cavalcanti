// TROCA DE PÁGINAS POR LINK
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useBlockAccess } from "../Hooks/useBlockAccess";
import Api from "../../Api";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  ContainerDetailsPage,
  ContainerMediumDetail,
  Text,
  ContainerDetail,
  LabeXHeader,
  Header,
  HeaderButtons,
  DetailTrip,
  Candidates,
} from "../Styles/Styles";
import logoLabeX from "../../assets/logo_white.png";
import "./styles.css";

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

function TripDetailsPage() {
  // ESTADO PARA SALVAR INFOS DA VIAGEM
  const [tripDetail, setTripDetail] = useState({});
  // ESTADO PARA SALVAR INFOS DOS CANDIDATOS
  const [candidates, setCandidates] = useState([]);
  // GUADAR O ID DA URRL QUE FOI PASSADO PELO TRIPS/PAGE (é um objeto)
  const tripId = useParams();
  console.log(tripId);

  // SALVA NA CONST TOKEN O TOKEN QUE ESTÁ NO LOCAL STORAGE
  const token = window.localStorage.getItem("token");

  //
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const getTripDetails = (tripId) => {
      Api.get(`/trip/${tripId.id}`, { headers: { auth: token } })
        .then((response) => {
          console.log(response);
          setTripDetail(response.data.trip);
          setCandidates(response.data.trip.candidates);
          console.log(response.data.trip);
        })
        .catch((err) => {
          console.log("erro");
        });
    };
    getTripDetails(tripId);
  }, [tripId]);

  // CUSTOM HOOK PARA VERIFICAR O TOKEN PARA ACESSO ÀS PÁGINAS PRIVADAS
  useBlockAccess();

  // MAPEAR O ESTADO DOS CANDIDATOS PARA MOSTRAR NA TELA AS INFOS
  const infoCandidates = candidates.map((candidate) => {
    return (
      <div>
        <hr />
        <p>
          <span>Nome:</span> {candidate.name} <span> Idade:</span>{" "}
          {candidate.age} <span> Pofissão: </span> {candidate.profession}{" "}
          <span> País: </span> {candidate.country}
        </p>
        <p>
          <span>Motivo da viagem:</span> {candidate.applicationText}
        </p>
        <MuiThemeProvider theme={theme}>
          <Button
            color="primary"
            variant="outlined"
            size="medium"
            onClick={() => aproveCandidate(candidate.id)}
          >
            Aceitar candidato
          </Button>
          <Button onClick={() => reproveCandidate(candidate.id)}>
            Recusar candidato
          </Button>
        </MuiThemeProvider>
      </div>
    );
  });

  const aproveCandidate = (candidateId) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: true };
    Api.put(`/trips/${tripId.id}/candidates/${candidateId}/decide`, body, {
      headers: { auth: token },
    })
      .then((response) => {
        alert("Candidato aprovado!");
      })
      .catch((err) => {
        console.log("Erro de aprovação!");
      });
  };

  const reproveCandidate = (candidateId) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: false };
    Api.put(`/trips/${tripId.id}/candidates/${candidateId}/decide`, body, {
      headers: { auth: token },
    })
      .then((response) => {
        alert("Candidato reprovado!");
      })
      .catch((err) => {
        console.log("Erro de reprovação!");
      });
  };

  // SE TIVER TOKEN, MOSTRARÁ A PÁGINA PRIVADA TRIPS/DETAILS. SE O USUÁRIO TENTAR ENTRAR PELO LINK DO NAVEGADOR SEM TER LOGIN, ELE CAIRÁ EM UMA PÁGINA VAZIA E NÃO VISUALIZARÁ A PÁGINA PRIVADA E VOLTARÁ PARA A PÁGINA DE LOGIN.
  if (token) {
    return (
      <ContainerDetailsPage>
        <Helmet title="LabeX - Detalhes da viagem" />
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
        <ContainerMediumDetail>
          <Text>
            <h2>
              Primeiro, selecione uma viagem na página{" "}
              <Link to="/trips/list">lista de viagens</Link>
            </h2>
          </Text>
          <ContainerDetail>
            <DetailTrip>
              <span>Nome da viagem:</span> {tripDetail.name}
              <span>Descrição da viagem:</span> {tripDetail.description}
              <span>Destino:</span> {tripDetail.planet}
              <span>Duração:</span> {tripDetail.durationInDays}
              <span>Patida:</span> {tripDetail.date}
            </DetailTrip>
            <Candidates>{infoCandidates}</Candidates>
          </ContainerDetail>
        </ContainerMediumDetail>
      </ContainerDetailsPage>
    );
  } else {
    return <div>ACESSO NEGADO</div>;
  }
}

export default TripDetailsPage;
