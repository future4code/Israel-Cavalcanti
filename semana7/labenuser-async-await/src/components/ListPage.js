import React from "react";
import styled from "styled-components";
import axios from "axios";

//4- Utilizar o span é uma forma de criar um botão sem ser um botão: como o span é uma tag inline, podemos utilizar ele ao lado de cada item da lista e atribuir a ele o cursor: pointer (propriedade do CSS que permite que seja clicavel um elemento), assim torna o texto dentro do span clicavel, e podemos atribuir a ele um onClick s2.
const DeleteButton = styled.span`
  color: red;
  font-weight: bolder;
  cursor: pointer;
`;
// ========================================================================================
// 5b- Para facilitar e deixar o código mais limpo, podemos transformar as autorizações em um objeto, e pegar ele e utilizá-lo sempre que possível (no GET, DELETE ...)
const axiosConfig = {
  headers: {
    Authorization: "israel-cavalcanti-mello",
  },
};

class ListPage extends React.Component {
  //2- Precisamos de um estado para receber a lista da API (antes de chamarmos da API, é bom criar dois objetos para fazer os testes (famoso mock) e só depois deixar o array vazio para receber da API as informações):
  state = {
    usersList: [],
  };
  // ========================================================================================
  //5a- O melhor momento para pegar a lista de usuários é quando a tela é renderizada pela primeira vez, para isso utilizamos o DidMount. E a lista de usuários vem de um GET da API, no caso é a getAllUsers.

  fetchUserList = async () => {
    // Aqui, antes era o componentDidMount() { e transformamos em um método separado para poder chamá-lo quando quisermos de forma separada (ver 6-)
    //Chamamos com o .get o endpoint getAllUsers da API através da URL disponibilizada na API. O get necessita da "URL", config. then(deu certo). Ele retornará um .data que é o output deste endpoint (ver na API qual é o array ou objeto de output), por isso passamos "reponse" como parâmetro (pode ser qualquer nome) e buscamos o data dele, assim ele retornará tudo o que estiver dentro desse array.

    const response = await axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      axiosConfig
    );
    //O retorno do response é o data, e queremos que esse objeto seja guardado no nosso state, logo, utilizamos o setState para alimentar o nosso array useresList.
    this.setState({ usersList: response.data });
  };

  // ========================================================================================
  // 6- (Aqui pode ser o delete ou o create) Vamos fazer o delete: Para que o delete funcione, é necessário que ao clicar no X que criamos o nome desapareça, e esse nome tem que ser chamado no banco de dados da API. E para isso, vamos atrás do id desse nome. Perceba que na URL o seu final tem "id" (.../users/:id) que é onde irá o id do nome que queremos, por isso se chama path param. e para inseri-lo na URL, adicionamos no lugar do :id um template string `URL...${id}`. O delete necessita da "URL", config. then(deu certo) e .catch(deu errado). Agora precisamos atualizar a lista, pois ela será atualizada: depois que montar a tela, para isso, tornaremos o DidMount um método separado pra poder chamá-lo tanto quando ocorrer o delete quanto quando chamar a lista.

  onClickDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      );
      alert("User deleted sucessful!"); // para mostrar ao usuário que deu certo
      this.fetchUserList(); // para atualizar buscar a lista
      //Agora precisamos ativar esse onClick no botao X criado, buscando nele o id do usuario que está sendo deletado: user.id
    } catch (error) {
      alert("ERROR WHEN DELETING THE USER!");
      //Quando der erro, irá aparecer essa mensagem
    }
  };

  // ========================================================================================
  // 7- Agora sim o DidMount chamará apenas o método separado em fetchUserList (chamar userList)
  componentDidMount() {
    this.fetchUserList();
  }

  render() {
    return (
      <div>
        {/*1- Basico da página: Título e botão*/}
        <h1>List Users</h1>
        <button onClick={this.props.backToLogin}>Voltar</button>
        {/*O botao acima será chamado no App pela props para poder retornar à LoginPage */}

        {/*3- Agora precisamos mostrar a lista de usuários na tela. Para percorrer o array usersList, utilizar um .map(). E para mostrá-los em formato de lista, utilizamos o <li> buscando o name do objeto apenas. E para deletar, utilizar o span (DeleteButton) explicado lááá em cima*/}
        {this.state.usersList.map((user) => {
          return (
            <li>
              {user.name}{" "}
              <DeleteButton onClick={() => this.onClickDeleteUser(user.id)}>
                X
              </DeleteButton>
            </li>
          );
        })}
        {/*4- Agora, para que o usuário veja que a lista de nomes está carregando ao entrar na página de lista podemos fazer o seguinte:*/}
        {this.state.usersList.length === 0 && <div>Carregando ...</div>}
      </div>
    );
  }
}

export default ListPage;
