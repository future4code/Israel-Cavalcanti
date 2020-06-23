import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonChangeToProfiles from "@material-ui/core/Button";

import {
  Container,
  Header,
  ImageCircle,
  ContainerCard,
  ContainerMatches,
  ProfileMatch,
} from "./Styles";

export default function MatchPage(props) {
  const [getMatches, setGetMatches] = useState([]);

  const matches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/israel-cavalcanti/matches"
      )
      .then((response) => {
        setGetMatches(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    matches();
  }, []);

  const getMatch = getMatches.map((info) => {
    return (
      <ProfileMatch>
        <ImageCircle src={info.photo} alt="imagem" />
        <span>{info.name}</span>
      </ProfileMatch>
    );
  });

  return (
    <Container>
      <ContainerCard>
        <Header>
          <h2>Matches</h2>
          <ButtonChangeToProfiles onClick={props.changePage} size="small">
            Ver Perfis
          </ButtonChangeToProfiles>
        </Header>
        <ContainerMatches>{getMatch}</ContainerMatches>
      </ContainerCard>
    </Container>
  );
}
