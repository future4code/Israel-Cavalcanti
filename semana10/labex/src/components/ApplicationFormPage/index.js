// TROCA DE PÁGINAS POR HISTORY
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
// Api É A BASE DO AXIOS SEPARADO EM OUTRO COMPONENTE
import Api from "../../Api";
import Helmet from "react-helmet";
// Countrys é um select com vários options com os nomes dos países
import Countrys from "../../Countrys";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  ContainerFormPage,
  ContainerMediumForm,
  ContainerForm,
  ContainerTextLeft,
  ContainerButton,
  FormQuestions,
  LabeXHeader,
  Header,
} from "../Styles/Styles";
import "./styles.css";
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

export default function ApplicationForm() {
  const history = useHistory();

  // ESTADO PARA GUARDAR AS INFORMAÇÕES DO USUÁRIO (FORMULÁRIO)
  /*
    SEM O CUSTOM HOOK, USARÍAMOS ASSIM:
    const [form, setForm] = useState({});
  */
  // COM O CUSTOM HOOK, NOSSO ESTADO SERÁ O SEGUINTE:
  const { form, onChange, resetForm } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    tripId: "",
    country: "",
  });

  // ESTADO PARA RECEBER AS VIAGENS
  const [trips, setTrips] = useState([]);

  // (ONCLICK) - FUNÇÃO PARA REDIRECIONAR O USUÁRIO PARA A HOME
  const goToHomePage = () => {
    history.push("/");
  };

  // (ONCHANGE) - FUNÇÃO PARA SALVAR AS INFORMAÇÕES QUE O USUÁRIO ESTÁ DIGITANDO
  const handleInputChange = (event) => {
    // DESESTRUTURAÇÃO DO INPUT TRAZENDO OS VALORES DE name E  value : o name mostra qual o name do input, e o value é o próprio valor que o usuário inseriu
    const { name, value } = event.target;
    // DEPOIS DE GUARDAR AMBAS INFOS, GUARDAMOS ELAS DENTRO DO ESTADO - ...form: copia o formulário que já existe e atualiza apenas o value do name X(que pode ser: name, email, age, applicationText, profession e tripId (esses valores são arbitrários))
    /*
     SEM O CUSTOM HOOK FICARIA ASSIM:
    
     setForm({ ...form, [name]: value });
    */
    // COM O CUSTOM HOOK QUEM FAZ A FUNÇÃO DE SETAR NO ESTADO É O onChange:
    onChange(name, value);
    // ** Outra forma de escrever seria: ({ ...form, [event.target.name]: event.target.value})
  };

  // FUNÇÃO PARA ENVIAR À API AS INFORMAÇÕES QUE O USUÁRIO DIGITOU
  const applyToTrip = () => {
    // BODY DA API, BUSCA NO ESTADO form AS INFORMAÇÕES DE CADA VALOR
    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    // Api É A BASE AXIOS QUE ESTÁ EM OUTRO ARQUIVO. tripId é o name que escolhi para o select que receberá as viagens possíveis e que precisa ser indicado no link para a API abaixo.
    Api.post(`/trips/${form.tripId}/apply`, body)
      .then((response) => {
        console.log(response);
        alert(
          "Candidatura enviada! Iremos avaliar sua situação. Em breve entraremos em contato."
        );
        /*
        SEM O CUSTOM HOOK, PARA LIMPAR OS CAMPOS, PODEMOS SETAR O ESTADO COM OS VALORES VAZIOS:

        setForm({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: "",
        });
        */
      })
      .catch((err) => {
        alert(
          "Algo em sua candidatura está errado, por favor revise seus dados!"
        );
        console.log("Erro! Sua candidatura não foi enviada!");
      });
  };

  // (ONSUBMIT) - FUNÇÃO PARA EVITAR QUE A PÁGINA ATUALIZE QUANDO O BOTÃO DE ENVIAR SER CLICADO (preventDefault), DEPOIS, INVOQUE NOVAMENTE O APPLY TO TRIP PARA QUE POSSAM SER INSERIDOS NOVAS INFORMAÇÕES
  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
    applyToTrip();
  };

  // FUNCÃO PARA PEGAR A LISTA COM AS VIAGENS DA API E PODER MOSTRÁ-LAS NA TELA EM UM SELECT
  const getTrips = () => {
    Api.get(`/trips`).then((response) => {
      setTrips(response.data.trips);
    });
  };

  // APÓS A RENDERIZAÇÃO DA PÁGINA, FAÇA:
  useEffect(() => {
    getTrips();
  }, [trips]);

  return (
    <ContainerFormPage>
      <Helmet title="LabeX - Formulário" />
      <Header>
        <LabeXHeader src={logoLabeX} alt="Logo-LabeX" />
      </Header>
      <ContainerMediumForm>
        <ContainerTextLeft>
          <h1>Seja bem-vindo!</h1>
          <h4>Canditate-se para uma viagem e descubra novos horizontes</h4>
          <h2>Preencha o formulário para se candidatar!</h2>
          <ContainerButton>
            <MuiThemeProvider theme={theme}>
              <Button color="primary" onClick={goToHomePage}>
                Ir para Home
              </Button>
            </MuiThemeProvider>
          </ContainerButton>
        </ContainerTextLeft>

        <ContainerForm>
          <FormQuestions onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              value={form.name}
              type="text"
              name="name"
              pattern="[A-Za-z]{3,}"
              title="MÍNIMO DE 3 LETRAS"
              placeholder="Nome"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="number">Idade:</label>
            <input
              value={form.age}
              type="number"
              name="age"
              min="18"
              title="VOCE DEVE SER TER MAIS QUE 18 ANOS!"
              placeholder="Idade"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="applicantionText">Motivo:</label>
            <input
              value={form.applicationText}
              type="text"
              name="applicationText"
              pattern="[A-Za-z0-9 ]{30,}"
              title="SEU TEXTO DEVE TER MAIS QUE 30 CARACTERES"
              placeholder="Motivo da sua ida"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="profession">Profissão:</label>
            <input
              value={form.profession}
              type="text"
              name="profession"
              minLength="10"
              placeholder="Profissão"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="tripId">Escolha uma viagem:</label>
            <select
              value={form.tripId}
              name="tripId"
              onChange={handleInputChange}
              required
            >
              <option value="">Escolha a viagem...</option>
              {trips.map((trip) => {
                return (
                  <option key={trip.id} value={trip.id}>
                    {trip.name} - {trip.planet}
                  </option>
                );
              })}
            </select>
            <label htmlFor={Countrys}>País de origem:</label>
            <Countrys onChange={handleInputChange} value={form.country} />
            <MuiThemeProvider theme={theme}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                type="submit"
              >
                Enviar
              </Button>
            </MuiThemeProvider>
          </FormQuestions>
        </ContainerForm>
      </ContainerMediumForm>
    </ContainerFormPage>
  );
}
