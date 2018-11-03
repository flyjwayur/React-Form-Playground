import React, { Component } from "react";
import "./App.css";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import classes from "../components/Input/input.module.css";

const patterns = {
  firstName: /^[a-zA-Z0-9]{3,16}$/,
  lastName: /^[a-zA-Z0-9]{3,16}$/,
  userName: /^[a-zA-Z0-9]{3,16}$/,
  email: /^([\w-.]+)@([\w-.]+)\.([a-zA-Z]){2,5}$/,
  password: /^[\w\W]{6,20}$/,
  phone: /^[\d]{3}[\d]{3}[\d]{4}$/
};

class App extends Component {
  state = {
    userInfo: {
      fistName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      phone: ""
    },
    regexValid: {
      fisrtName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      phone: null
    },
    users: [],
    status: "signUp"
  };

  inputFocus = React.createRef();

  checkRegexValid = (element, patterns) => {
    if (patterns[element.name].test(element.value)) {
      element.classList.add = `${classes.valid}`;
      return true;
    } else {
      element.classList.add = `${classes.invalid}`;
      return false;
    }
  };

  handleInputs = e => {
    if (this.checkRegexValid(e.target, patterns)) {
      this.setState({
        userInfo: {
          ...this.state.userInfo,
          [e.target.name]: e.target.value
        },
        regexValid: {
          ...this.state.regexValid,
          [e.target.name]: true
        }
      });
    } else {
      this.setState({
        regexValid: {
          ...this.state.regexValid,
          [e.target.name]: false
        }
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({
      users: [
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
      ]
    });
  };

  handleFocus = () => {
    this.inputFocus.current.focus();
  };

  componentDidUpdate = () => {
    console.log("userInfo", this.state.userInfo);
    console.log("users", this.state.users);
    console.log("regex Valid", this.state.regexValid);
  };

  render() {
    return (
      <SignUpForm
        userInfo={this.state.userInfo}
        regexValid={this.state.regexValid}
        handleInputs={this.handleInputs}
        handleSubmit={this.handleSubmit}
        handleFocus={this.handleFocus}
        inputFocus={this.inputFocus}
      />
    );
  }
}

export default App;
