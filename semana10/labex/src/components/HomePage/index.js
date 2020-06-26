import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  const goToApplicationForm = () => {
    history.push("/application-form");
  };

  const goToLogin = () => {
    history.push("/login-adm");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToApplicationForm}>Ir para Formulário</button>
      <button onClick={goToLogin}>Ir para Login</button>
    </div>
  );
}
