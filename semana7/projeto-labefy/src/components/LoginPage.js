import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO LABEFY!</h1>
        <button onClick={this.props.viewLoginPage}>Start Labefy</button>
      </div>
    );
  }
}

export default LoginPage;
