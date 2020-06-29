// TROCA DE PÁGINAS POR LINK
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useBlockAccess } from "../Hooks/useBlockAccess";
import Api from "../../Api";

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
        <p>
          Nome: {candidate.name} - Idade: {candidate.age} - Pofissão:{" "}
          {candidate.profession} - País: {candidate.country}
        </p>
        <p>Motivo da viagem: {candidate.applicationText}</p>
        <button onClick={() => aproveCandidate(candidate.id)}>
          Aceitar candidato
        </button>
        <button onClick={() => reproveCandidate(candidate.id)}>
          Recusar candidato
        </button>
        <br />
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
      <div>
        <Helmet title="LabeX - Detalhes da viagem" />
        <h1>TripDetailsPage</h1>
        <Link to="/adm">
          <button>Voltar</button>
        </Link>
        <h3>
          Selecione uma viagem na página{" "}
          <Link to="/trips/list">lista de viagens</Link>
        </h3>
        <p>Nome da viagem: {tripDetail.name}</p>
        <p>Descrição da viagem: {tripDetail.description}</p>
        <p>Destino: {tripDetail.planet}</p>
        <p>Duração: {tripDetail.durationInDays}</p>
        <p>Patida: {tripDetail.date}</p>
        <br />
        {infoCandidates}
      </div>
    );
  } else {
    return <div>ACESSO NEGADO</div>;
  }
}

export default TripDetailsPage;
