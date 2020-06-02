import React from "react";

// import { Container } from './styles';

class List extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fazerLogout}>Voltar</button>
      </div>
    );
  }
}

export default List;
