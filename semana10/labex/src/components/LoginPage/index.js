import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const history = useHistory();

  const goToAdmPage = () => {
    history.replace("/adm");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/israel-cavalcanti";

  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("email", response.data.user.email);

      alert("Login realizado com sucesso!");
      goToAdmPage();
    } catch (error) {
      console.log(error);
      alert("Algo está errado, tente novamente!");
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      alert("Você já está logado!");
      history.push("/adm");
    }
  }, [history]);

  const goBack = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <input alue={email} onChange={handleUpdateEmail} placeholder="E-mail" />

      <input
        alue={password}
        onChange={handleUpdatePassword}
        placeholder="Senha"
      />

      <button onClick={login}>Logar!</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
