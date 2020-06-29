// TROCA DE PÁGINAS POR LINK
import React from "react";
import { useForm } from "../Hooks/useForm";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { useBlockAccess } from "../Hooks/useBlockAccess";
// Api É A BASE DO AXIOS SEPARADO EM OUTRO COMPONENTE
import Api from "../../Api";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  ContainerCreateTripPage,
  ContainerMediumADM,
  Text,
  ContainerForm,
  LabeXHeader,
  Header,
  HeaderButtons,
  FormQuestionsCreate,
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

export default function CreateTripPage() {
  // CUSTOM HOOK PARA VERIFICAR O TOKEN PARA ACESSO ÀS PÁGINAS PRIVADAS
  useBlockAccess();

  // COM O CUSTOM HOOK, NOSSO ESTADO SERÁ O SEGUINTE:
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  // SALVA NA CONST TOKEN O TOKEN QUE ESTÁ NO LOCAL STORAGE
  const token = window.localStorage.getItem("token");

  // ARRAY COM OS PLANETAS
  const planets = [
    "Mercúrio",
    "Venus",
    "Marte",
    "Júpter",
    "Saturno",
    "Urano",
    "Netuno",
  ];

  const createTrip = () => {
    // BODY DA API, BUSCA NO ESTADO form AS INFORMAÇÕES DE CADA VALOR
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: Number(form.durationInDays),
    };

    const authorization = {
      headers: {
        auth: token,
      },
    };
    Api.post(`/trips`, body, authorization)
      .then((response) => {
        console.log("Viagem criada com sucesso!");
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        console.log("Erro, sua viagem não foi enviada!");
        alert("Erro, sua viagem não foi!");
      });
  };

  // (ONCHANGE) - FUNÇÃO PARA SALVAR AS INFORMAÇÕES QUE O USUÁRIO ESTÁ DIGITANDO
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  // (ONSUBMIT) - FUNÇÃO PARA EVITAR QUE A PÁGINA ATUALIZE QUANDO O BOTÃO DE ENVIAR SER CLICADO (preventDefault), DEPOIS, INVOQUE NOVAMENTE O APPLY TO TRIP PARA QUE POSSAM SER INSERIDOS NOVAS INFORMAÇÕES
  const handleSubmit = (event) => {
    event.preventDefault();
    createTrip();
  };

  // SE TIVER TOKEN, MOSTRARÁ A PÁGINA PRIVADA TRIPS/CREATE. SE O USUÁRIO TENTAR ENTRAR PELO LINK DO NAVEGADOR SEM TER LOGIN, ELE CAIRÁ EM UMA PÁGINA VAZIA E NÃO VISUALIZARÁ A PÁGINA PRIVADA E VOLTARÁ PARA A PÁGINA DE LOGIN.
  if (token) {
    return (
      <ContainerCreateTripPage>
        <Helmet title="LabeX - Criar viagem" />
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
        <ContainerMediumADM>
          <Text>
            <h1>Vamos criar uma nova rota de viagem!</h1>
            <h3>
              Preencha o formulário ao lado com as informações da nova rota
            </h3>
          </Text>
          <ContainerForm>
            <FormQuestionsCreate onSubmit={handleSubmit}>
              <label htmlFor="name">Nome da viagem</label>
              <input
                value={form.name}
                type="text"
                name="name"
                pattern="[A-Za-z ]{5,}"
                title="DEVE TER NO MÍNIMO 5 CARACTERES"
                placeholder="Nome da viagem"
                required
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="planet">Destino:</label>
              <select
                value={form.planet}
                name="planet"
                title="FAVOR ESCOLHER UM PLANETA"
                required
                onChange={handleInputChange}
              >
                <option value="">Selecione um planeta...</option>
                {planets.map((planet) => {
                  return <option value="planet">{planet}</option>;
                })}
              </select>
              <br />
              <label htmlFor="date">Selecione uma data:</label>
              <input
                value={form.date}
                type="date"
                name="date"
                min={new Date().toJSON().split("T")[0]}
                title="SELECIONE A DATA DE PARTIDA"
                required
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="description">Motivo da viagem:</label>
              <input
                value={form.description}
                type="text"
                name="description"
                pattern="[A-Za-z ]{30,}"
                title="SEU TEXTO DEVE TER NO MÍNIMO 30 CARACTERES"
                placeholder="Descreva o motivo"
                required
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="durationInDays">Duração em dias:</label>
              <input
                value={form.durationInDays}
                type="number"
                name="durationInDays"
                title="MÍNIMO DE 50 DIAS"
                min="50"
                placeholder="Mínimo 50 dias"
                required
                onChange={handleInputChange}
              />
              <br />
              <MuiThemeProvider theme={theme}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Criar viagem
                </Button>
              </MuiThemeProvider>
            </FormQuestionsCreate>
          </ContainerForm>
        </ContainerMediumADM>
      </ContainerCreateTripPage>
    );
  } else {
    return <div>ACESSO NEGADO</div>;
  }
}
