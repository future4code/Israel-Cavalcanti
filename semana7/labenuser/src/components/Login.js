import React from "react";
import Home from "./Home";

class Login extends React.Component {
  render() {
    return (
      <div>
        <label for="name">Name: </label>
        <input type="text" name="name" />
        <br />
        <label for="email">E-mail: </label>
        <input type="text" name="email" />
        <br />
        <button onClick={this.props.clicouSave}>Save</button>
        <hr />
        <button>Ir para página de lista</button>
      </div>
    );
  }
}
export default Login;
