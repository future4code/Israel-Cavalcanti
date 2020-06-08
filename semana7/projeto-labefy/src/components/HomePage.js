import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "israel-cavalcanti-mello",
  },
};

let trackToPlaylistId;

class HomePage extends React.Component {
  state = {
    playlistName: [],
    createTrack: [],
    allPlaylists: [],
    musicInsert: "",
    artistInsert: "",
    urlInsert: "",
  };

  playlistChange = (event) => {
    const newNameValue = event.target.value;
    this.setState({ playlistName: newNameValue });
  };
  //================================================================
  selectChange = (event) => {
    trackToPlaylistId = event.target.value;
  };

  trackChange = (event) => {
    const newTrackValue = event.target.value;
    this.setState({ musicInsert: newTrackValue });
  };

  artistChange = (event) => {
    const newArtistValue = event.target.value;
    this.setState({ artistInsert: newArtistValue });
  };

  urlChange = (event) => {
    const newUrlValue = event.target.value;
    this.setState({ urlInsert: newUrlValue });
  };
  //================================================================
  createPLaylist = () => {
    const bodyCreatePlaylist = {
      name: this.state.playlistName,
      id: this.state.playlistName,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        bodyCreatePlaylist,
        axiosConfig
      )
      .then(() => {
        alert(`Playlist ${this.state.playlistName} created sucessful!`);
        this.setState({ playlistName: "" });
      })
      .catch(() => {
        alert("Error creating playlist");
      });
  };

  createTrack = (playlistId) => {
    const bodyCreateTrack = {
      name: this.state.musicInsert,
      artist: this.state.artistInsert,
      url: "https://open.spotify.com/embed/track/" + this.state.urlInsert,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        bodyCreateTrack,
        axiosConfig
      )
      .then(() => {
        alert(`Track add sucessful!`);
        this.setState({ createTrack: "" });
      });
  };

  componentDidMount = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((response) => {
        this.setState({ allPlaylists: response.data.result.list });
      });
  };

  render() {
    return (
      <div>
        <h1>Criar playlist</h1>
        <p>Digite no campo abaixo o nome da playlist que deseja criar.</p>
        <input
          type="text"
          placeholder="Playlist name"
          value={this.state.playlistName}
          onChange={this.playlistChange}
        />
        <button onClick={this.createPLaylist}>Create!</button>
        <hr />
        {/* ======================================================== */}
        <h1>Visualize as playlists</h1>
        <p>
          Para consultar as playlists criadas vá para a página de listagem
          clicando no botão abaixo.
        </p>

        <button onClick={this.props.viewListPage}>View all Playlists</button>
        <hr />
        {/* ======================================================== */}
        <h1>Adicione novas músicas à sua playlist!</h1>
        <p> Selecione a playlist em que a música será adicionada:</p>
        <div>
          <select onChange={this.selectChange}>
            <option value=""></option>
            {this.state.allPlaylists.map((playlist) => {
              return <option value={playlist.id}>{playlist.name}</option>;
            })}
          </select>

          <p>
            Insira o nome da música, o artista (ou banda) e o código final do
            link da música do Spotify
          </p>
          <p>
            (ex: https://open.spotify.com/track/
            <u>
              <i>4e9eGQYsOiBcftrWXwsVco?si=gSS-_2LpT8-jh2KapMwlzQ</i>
            </u>
            <p>
              {" "}
              Pegar apenas o que está depois do /track/) e colocar em 'código da
              música'
            </p>
          </p>
          <input
            type="text"
            value={this.state.createTrack.name}
            placeholder="Nome"
            onChange={this.trackChange}
          ></input>
          <input
            type="text"
            value={this.state.createTrack.artist}
            placeholder="Banda"
            onChange={this.artistChange}
          ></input>
          <input
            type="text"
            value={this.state.createTrack.url}
            placeholder="Código da música"
            onChange={this.urlChange}
          ></input>
          <br />
          <button onClick={() => this.createTrack(trackToPlaylistId)}>
            Add!
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
