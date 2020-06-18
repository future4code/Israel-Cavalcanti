import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeletePlaylist = styled.span`
  color: orange;
  font-weight: bolder;
  cursor: pointer;
`;

const Playlist = styled.li`
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "israel-cavalcanti-mello",
  },
};

class ListPage extends React.Component {
  state = {
    allPlaylists: [],
    musics: [],
  };

  fetchAllPlaylist() {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((response) => {
        this.setState({ allPlaylists: response.data.result.list });
      });
  }

  onClickDeletePlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        axiosConfig
      )
      .then(() => {
        alert(`Playlist deleted sucessful!`);
        this.fetchAllPlaylist();
      })
      .catch((error) => {
        alert("ERROR WHEN DELETING THE PLAYLIST!");
      });
  };

  componentDidMount() {
    this.fetchAllPlaylist();
  }

  onClickMusicasDaPlaylist = (playlistId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/Tracks`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ musics: response.data.result.tracks });
      });
  };

  render() {
    return (
      <div>
        <h1>Playlists criadas</h1>
        <p>
          Aqui está a lista das suas playlists. Para retornar ao menu principal,
          clique no botão abaixo.
        </p>
        <button onClick={this.props.backToHome}>Back to home</button>
        <br />
        <br />
        {this.state.allPlaylists.map((playlist) => {
          return (
            <Playlist
              key={playlist.id}
              onClick={() => this.onClickMusicasDaPlaylist(playlist.id)}
            >
              {playlist.name}{" "}
              <DeletePlaylist
                onClick={() => this.onClickDeletePlaylist(playlist.id)}
              >
                X
              </DeletePlaylist>
            </Playlist>
          );
        })}
        <br />
        <hr />
        <h1>Selecione uma playlist e veja abaixo suas músicas!</h1>
        {this.state.musics.map((musics) => {
          return (
            <div key={musics.id}>
              <li>{musics.name}</li>
              <br />
              <iframe
                title="teste"
                src={musics.url}
                width="300"
                height="80"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListPage;
