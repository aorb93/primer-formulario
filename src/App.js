import React, { Component } from "react";
import "./style.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, "email");
          }}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, "password");
          }}
          type="password"
          placeholder="*****"
        />
        <div>
          <input
            onClick={this.submitForm}
            type="submit"
            value="Iniciar Sesión"
          />
        </div>
      </form>
    );
  }
}

export default function App() {
  return (
    <div>
      <Formulario />
    </div>
  );
}
