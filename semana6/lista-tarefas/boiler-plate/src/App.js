import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(), // Gera um id para cada tarefa, assim podemos identificar qual foi clicada para marcar como completa
        texto: "",
        completa: false, // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Gera um id para cada tarefa, assim podemos identificar qual foi clicada para marcar como completa
        texto: "",
        completa: !false, // Indica se a tarefa está completa (true ou false)
      },
    ],
    inputValue: "",
    filter: "",
  };

  componentDidUpdate() {}

  componentDidMount() {}

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value }); // 1. permite que possa ser inserido um valor no input
  };

  criaTarefa = () => {
    const novaTarefa = {
      // 2. cria um novo objeto para o array tarefas
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novaListaTarefa = [...this.state.tarefas, novaTarefa]; // 3. Cria uma cópia do array tarefas no state

    this.setState({ tarefas: novaListaTarefa }); // 4. diz para o state que esse é o novo array para o array tarefas
    this.state.inputValue = ""; // 5. limpa o input assim que clicar em adicionar
  };

  selectTarefa = (id) => {
    const idTarefa = this.state.tarefas.map((tarefa) => {
      const idAtual = id;
      if (tarefa.id === id) {
        return { completa: !tarefa.completa, texto: tarefa.texto, id: idAtual };
      } else {
        return tarefa;
      }
    });
  };

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value }); // permite selecionar no Filtro qual o tipo de tarefa
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filter) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
