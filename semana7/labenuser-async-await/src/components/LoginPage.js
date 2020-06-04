import React from "react";
import axios from "axios";
// 1- Aqui precisamos fazer com que os inputs sejam controlados quardando os dados forem inseridos e guardá-los em um estado (memória) para o endpoint para atualizar a lista.

class LoginPage extends React.Component {
  // 2- Então criamos o state para receber as informações do usuário. E quais são elas? Precisamos ver na API qual o objeto de input que ele recebe. No nosso caso, o método createUser recebe um body com name e email:
  state = {
    name: "",
    email: "",
  };
  // ========================================================================================
  //4- Para lidarmos com a mudança nos inputs, precisamos guardar as informações inseridas neles:
  nameChange = (event) => {
    const newNameValue = event.target.value; // guardado o valor aqui nessa const, precisamos atualizar o estado:
    this.setState({ name: newNameValue });
  };

  emailChange = (event) => {
    const newEmailValue = event.target.value;
    this.setState({ email: newEmailValue });
  };
  // agora chamamos os eventos de OnChange em cada input para que possamos inserir os dados
  // ========================================================================================
  // 5- Precisamos agora chamar o método da API que cria novos objetos (POST) e associá-lo ao botão de enviar/salvar os dados ionseridos (onClick):
  createUser = async () => {
    const axiosConfig = {
      headers: {
        Authorization: "israel-cavalcanti-mello",
      },
    };
    const body = {
      name: this.state.name,
      email: this.state.email,
    };
    //O método post é composto por "URL", config e body. Por isso foram criados acima o axiosConfig e o body, e eles representam exatamente o que a API requer, assim podemos chamá-los dentro do post. Essa requisição não nos retorna uma resposta, mas nos interessa se deu certo ou não, logo colocamos o .then e o . catch.
    try {
      axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      );

      alert(`User ${this.state.name} created sucessful!`);
      this.setState({ name: "", email: "" }); //Para que os dados inseridos sejam apagados depois de clicar no botão, resetamos o estado para uma string vazia
    } catch (error) {
      alert("Error creating user");
    }
  };

  render() {
    return (
      <div>
        <h1>Register Page</h1>
        <label>Name: </label>
        {/*3- Os inputs precisam de um value para linkar com o estado: */}
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.nameChange}
        />
        <br />
        <label>E-mail: </label>
        <input
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.emailChange}
        />
        <br />
        <button onClick={this.createUser}>Send!</button>
        <hr />
        <button onClick={this.props.viewListPage}>View List Users</button>
      </div>
    );
  }
}
export default LoginPage;
