import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AdmPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToCreateTrips = () => {
    history.push("/trips/create");
  };

  const goToListTrips = () => {
    history.push("/trips/list");
  };

  const goToDetailsTrips = () => {
    history.push("/trips/details");
  };

  // =================================
  // O useEffect serve para que o usuário não tenha acesso à página de adm sem o login
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    }
  }, [history]);

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <h1>AdmPage</h1>
      <p>Você está logado como {window.localStorage.getItem("email")}</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
      <button onClick={goToCreateTrips}>Criar Viagem</button>
      <button onClick={goToListTrips}>Listar Viagens</button>
      <button onClick={goToDetailsTrips}>Detalhar Viagens</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
