import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function useBlockAccess() {
  const history = useHistory();

  // AO RENDERIZAR A PÁGINA, VERIFIQUE A SEGUINTE CONDIÇÃO:
  useEffect(() => {
    // SALVA NA CONST TOKEN O TOKEN QUE ESTÁ NO LOCAL STORAGE
    const token = window.localStorage.getItem("token");
    // SE O TOKEN NÃO EXISTIR, A REQUISIÇÃO NãO FOI AUTORIZADA, ENTÃO RETORNE PARA A PÁGINA /ADM ---- a parte "?error=nologin" É UM QUERY PARAM APARA INDICAR ERRO DE LOGIN
    if (token === null) {
      history.push("/login-adm?error=nologin");
      alert("Você precisa fazer login para acessar essa página!");
    }
  }, [history]);
}
