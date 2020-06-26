import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { useForm } from "../Hooks/useForm";

export default function ApplicationForm() {
  const history = useHistory();
  const [form, setForm] = useState({});
  const [trips, setTrips] = useState([]);

  const goToHomePage = () => {
    history.push("/");
  };

  //.1
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  //.2
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
    console.log(newForm);
  };

  //. 3
  const handleSubmit = (event) => {
    event.preventDefault();
    applyToTrip();
  };

  //.4
  const applyToTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    console.log(body);
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${form.id}/apply`,
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("err");
      });
  };
  // PEGAR LISTA COM AS VIAGENS E LISTAR EM UM SELECT
  const getTrips = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/israel-cavalcanti/trips`
      )
      .then((response) => {
        setTrips(response.data.trips);
      });
  };

  useEffect(() => {
    getTrips();
  }, [trips]);

  return (
    <div>
      <h1>ApplicationForm</h1>
      <button onClick={goToHomePage}>Ir para Home</button>
      <h3>Preencha o formulário abaixo para se candidatar a uma viagem!</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          value={form.name}
          type="text"
          name="name"
          placeholder="Nome"
          required
          onChange={handleInputChange}
        />
        <br />
        <label>Idade:</label>
        <input
          value={form.age}
          type="number"
          name="age"
          placeholder="Idade"
          required
          onChange={handleInputChange}
        />
        <br />
        <label>Motivo:</label>
        <input
          value={form.applicationText}
          type="text"
          name="applicationText"
          placeholder="Motivo da sua ida"
          required
          onChange={handleInputChange}
        />
        <br />
        <label>Profissão:</label>
        <input
          value={form.profession}
          type="text"
          name="profession"
          placeholder="Profissão"
          required
          onChange={handleInputChange}
        />
        <br />
        <label>País de origem:</label>
        <input
          value={form.country}
          type="text"
          name="country"
          placeholder="País"
          required
          onChange={handleInputChange}
        />
        <br />
        <label>Escolha uma viagem:</label>

        <select value={form.id} name="id" onChange={handleInputChange} required>
          <option></option>
          {trips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>
                {trip.name} - {trip.planet}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
