import axios from "axios";

const api = axios.create({
  baseURL:
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/israel-cavalcanti",
});

export default api;
