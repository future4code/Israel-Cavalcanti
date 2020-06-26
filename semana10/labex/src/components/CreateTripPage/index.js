import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CreateTripPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  // O useEffect serve para que o usuário não tenha acesso à página de adm sem o login
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login-adm");
      alert("Você precisa fazer login para acessar essa página!");
    }
  }, [history]);

  return (
    <div>
      <h1>CreateTripPage</h1>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
