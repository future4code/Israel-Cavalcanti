import React from "react";
import axios from "axios";

class HomePage extends React.Component {
  state = {
    name: "",
  };

  playlistChange = (event) => {
    const newNameValue = event.target.value;
    this.setState({ name: newNameValue });
  };

  createPLaylist = () => {
    const axiosConfig = {
      headers: {
        Authorization: "israel-cavalcanti-mello",
      },
    };
    const body = {
      name: this.state.name,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Playlist ${this.state.name} created sucessful!`);
        this.setState({ name: "" });
      })
      .catch(() => {
        alert("Error creating playlist");
      });
  };

  render() {
    return (
      <div>
        <h1>Criar playlist</h1>
        <label>
          Digite no campo abaixo o nome da playlist que deseja criar.
        </label>
        <br />
        <input
          type="text"
          placeholder="Playlist name"
          value={this.state.name}
          onChange={this.playlistChange}
        />
        <button onClick={this.createPLaylist}>Create!</button>
        <hr />
        <h1>Visualize as playlists</h1>
        <label>
          Para consultar as playlists criadas vá para a página de listagem
          clicando no botão abaixo.
        </label>
        <br />
        <button onClick={this.props.viewListPage}>View all Playlists</button>
      </div>
    );
  }
}

export default HomePage;
