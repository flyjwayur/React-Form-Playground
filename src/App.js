import React, { Component } from "react";
import "./App.css";
import SignUpForm from './components/SignUpForm'

class App extends Component {
  state = {
    userInfo : {
      fistname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      bio:""
    },
    status: "signUp"
  };

  handleInputs = e => {
    console.log("from e", e.target.value);
    console.log("from e", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <SignUpForm handleInputs={this.handleInputs} userInfo={this.state.userInfo}></SignUpForm>
      </div>
    );
  }
}

export default App;
