import React, { useState, useEffect } from "react";
import {
  Body,
  Header,
  ContainerDays,
  Day,
  Footer,
  Notes,
  Logo,
  Inputs,
} from "./Style";
import axios from "axios";

function Planner() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    inputTask: "",
    day: "",
  });

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-israel-cavalcanti";

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        alert("Algo deu errado no GET!");
        console.log(err);
      });
  };

  // CRIA TASK E ENVIA PRA API
  const createTasks = (event) => {
    event.preventDefault();
    const body = {
      text: form.inputTask,
      day: form.day,
    };

    axios
      .post(baseUrl, body)
      .then((response) => {
        console.log("Tarefa criada!");
        getTask();
      })
      .catch((err) => {
        console.log("Algo deu errado no POST!");
      });
  };

  // PEGAR VALORES DO INPUT
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // =================================================
  return (
    <Body>
      <Header>
        <Logo>
          <h2>Planejamento semanal</h2>
        </Logo>
        <Inputs onSubmit={createTasks}>
          <input
            type="text"
            name="inputTask"
            onChange={onChangeInput}
            value={form.inputTask}
            placeholder="Digite aqui sua atividade"
          ></input>
          <select name="day" value={form.day} onChange={onChangeInput} required>
            <option value="">Selecione o dia...</option>
            <option value="monday">Segunda-Feira</option>
            <option value="tuesday">Terça-Feira</option>
            <option value="wednesday">Quarta-Feira</option>
            <option value="thursday">Quinta-Feira</option>
            <option value="friday">Sexta-Feira</option>
            <option value="saturday">Sábado</option>
            <option value="sunday">Domingo</option>
          </select>
          <button type="submit">Criar atividade</button>
        </Inputs>
      </Header>
      <ContainerDays>
        <Day>
          <h3>Segunda-Feira</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "monday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
        <Day>
          <h3>Terça-Feira</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "tuesday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
        <Day>
          <h3>Quarta-Feira</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "wednesday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
        <Day>
          <h3>Quinta-Feira</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "thursday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
        <Day>
          <h3>Sexta-Feira</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "friday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
        <Day>
          <h3>Sábado</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "friday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
        <Day>
          <h3>Domingo</h3>
          <ul>
            {tasks.map((task) => {
              if (task.day === "friday") {
                return <li>{task.text}</li>;
              }
            })}
          </ul>
        </Day>
      </ContainerDays>
      <Footer>
        <Notes>NOTAS:</Notes>
      </Footer>
    </Body>
  );
}
export default Planner;
