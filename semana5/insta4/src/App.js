import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?b=1'}
        />

        <Post
          nomeUsuario={'Soter'}
          fotoUsuario={'https://picsum.photos/50/50?a=2'}
          fotoPost={'https://picsum.photos/200/150?b=2'}
        />

        <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?b=3'}
        />
      </div>
    );
  }
}

export default App;
