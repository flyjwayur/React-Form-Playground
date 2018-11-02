import React, { Component } from "react";
import "./App.css";
import SignUpForm from '../components/SignUpForm/SignUpForm'


class App extends Component {
  state = {
    userInfo : {
      fistName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      phone: ""
    },
    users: [],
    status: "signUp",
  };

  inputFocus = React.createRef()

  handleInputs = e => {
    console.log("from e", e.target.value);
    console.log("from e", e.target.name);

    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      } 
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      users : [
        ...this.state.users,
        {
          firstName: this.state.userInfo.firstName,
          lastName: this.state.userInfo.lastName,
          userName: this.state.userInfo.userName,
          email: this.state.userInfo.email,
          password: this.state.userInfo.password,
          phone: this.state.userInfo.phone,
          bio: this.state.userInfo.bio
        }
      ]});
  };

  handleFocus = () => {
    this.inputFocus.current.focus();
  }

  componentDidUpdate = () => {
    console.log("users", this.state.users);
  }

  render() {
    return (
     <SignUpForm userInfo={this.state.userInfo} handleInputs={this.handleInputs} handleSubmit={this.handleSubmit} handleFocus={this.handleFocus} inputFocus={this.inputFocus}/>
    );
  }
}

export default App;
