import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeletePlaylist = styled.span`
  color: orange;
  font-weight: bolder;
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

  render() {
    return (
      <div>
        <h1>Playlists criadas</h1>
        <p>
          Aqui está a lista das suas playlists. Para retornar ao menu principal,
          clique no botão abaixo.
        </p>
        <button onClick={this.props.backToHome}>Back to home</button>

        {this.state.allPlaylists.map((playlist) => {
          return (
            <li>
              {playlist.name}{" "}
              <DeletePlaylist
                onClick={() => this.onClickDeletePlaylist(playlist.id)}
              >
                X
              </DeletePlaylist>
            </li>
          );
        })}
      </div>
    );
  }
}

export default ListPage;
