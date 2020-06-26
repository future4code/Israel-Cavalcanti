import React from "react";
import { Link } from "react-router-dom";
import { useBlockAccess } from "../Hooks/useBlockAccess";
import { useHistory } from "react-router-dom";

export default function TripDetailsPage() {
  useBlockAccess();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>TripDetailsPage</h1>
      <Link to="/adm">
        <button onClick={goBack}>Voltar</button>
      </Link>
    </div>
  );
}
