// TROCA DE PÁGINAS POR HISTORY
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";
// Api É A BASE DO AXIOS SEPARADO EM OUTRO COMPONENTE
import Api from "../../Api";
import logoLabeX from "../../assets/logo_white.png";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  ContainerLoginPage,
  LabeX,
  ContainerMediumHome,
  LoginRight,
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

export default function LoginPage() {
  const history = useHistory();

  //(ONCLICK) - FUNÇÃO PARA REDIRECIONAR O USUÁRIO PARA A PÁGINA /ADM E NÃO PERMITIR QUE VOLTE PARA A /LOGIN-ADM (REPLACE)
  const goToAdmPage = () => {
    history.replace("/adm");
  };

  // (ONCLICK) - FUNÇÃO PARA REDIRECIONAR O USUÁRIO PARA A O HOME
  const goBack = () => {
    history.push("/");
  };

  //1 ESTADO PARA RECEBER EMAIL E 1 PARA SENHA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // (ONCHANGE) - FUNÇÃO PARA GUARDAR AS MUDANÇAS DO INPUT DO EMAIL
  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  // (ONCHANGE) - FUNÇÃO PARA BATER NA API E REALIZAR A AUTORIZAÇÃO DE ACESSO
  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  // (ONCLICK) - FUNÇÃO PARA BATER NA API E REALIZAR A AUTORIZAÇÃO DE ACESSO
  const login = async () => {
    //BODY DA API ONDE SERÃO CONFERIDOS EMAIL E SENHA
    const loginBody = {
      email: email,
      password: password,
    };

    try {
      // BATE NA API AS INFOS DE EMAIL E SENHA
      const response = await Api.post(`/login`, loginBody);
      // SE EXISTIR O LOGIN, A API RETORNA O TOKEN, GUARDAMOS ELE NO LOCAL STORAGE PARA QUE O ACESSO ÀS PÁGINAS PRIVADAS CONTINUE DEPENDENDO DO TOKEN
      window.localStorage.setItem("token", response.data.token);
      // GUARDO A INFORMAÇÃO DO E-MAIL QUE ESTÁ SENDO ENVIADO PARA MOSTRAR NA TELA COM QUAL E-MAIL FOI REALIZADO O EMAIL (ESTÉTICA APENAS)
      window.localStorage.setItem("email", response.data.user.email);
      alert("Login realizado com sucesso!");
      // ASSIM QUE A REQUISIÇÃO APROVAR O LOGIN, O USUÁRIO É REDIRECIONADO PARA A PÁGINA /ADM
      goToAdmPage();
    } catch (error) {
      console.log(error);
      alert("Algo está errado, tente novamente!");
    }
  };

  // APÓS A RENDERIZAÇÃO DA PÁGINA, FAÇA:
  useEffect(() => {
    // SALVA NA CONST TOKEN O TOKEN QUE ESTÁ NO LOCAL STORAGE
    const token = window.localStorage.getItem("token");
    // SE O TOKEN EXISTIR, A PESSOA ESTARÁ LOGADA, LOGO, NÃO PRECISA TER ACESSO À PÁGINA DE LOGIN, ENTÃO REDIRECIONAMOS ELA PARA A /ADM (isso acontecerá quando estiver na Home e querer ir para login)
    if (token !== null) {
      alert("Você já está logado!");
      history.push("/adm");
    }
  }, [history]);

  return (
    <ContainerLoginPage>
      <Helmet title="LabeX - Login ADM" />
      <ContainerMediumHome>
        <LabeX src={logoLabeX} alt="Logo-LabeX" />
        <LoginRight>
          <label htmlFor="Email">E-mail:</label>
          <input
            name="Email"
            type="email"
            value={email}
            onChange={handleUpdateEmail}
            placeholder="E-mail"
          />

          <label htmlFor="Password">Senha:</label>
          <input
            name="Password"
            type="password"
            value={password}
            onChange={handleUpdatePassword}
            placeholder="Senha"
          />

          <MuiThemeProvider theme={theme}>
            <ContainerButton>
              <Button variant="contained" size="medium" onClick={login}>
                Logar!
              </Button>

              <Button
                color="primary"
                variant="outlined"
                size="medium"
                onClick={goBack}
              >
                Voltar
              </Button>
            </ContainerButton>
          </MuiThemeProvider>
        </LoginRight>
      </ContainerMediumHome>
    </ContainerLoginPage>
  );
}
