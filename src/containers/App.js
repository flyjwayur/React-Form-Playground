import React, { Component } from "react";
import "./App.css";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignInForm from "../components/SignInForm/SignInForm";
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
    todos:[],
    userInfo: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      phone: ""
    },
    regexValid: {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      phone: null
    },
    loginValid:{
      email: false,
      password: false
    },
    users: JSON.parse(localStorage.getItem("users")) || [],
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
    console.log ({ "lala":e.target.name, "baba":e.target.value
  });
    console.log (this.state.userInfo);
    let name;
    name = e.target.name
    let value = e.target.value;
    const todos = this.state.todos.slice();
    todos.push('one item');
    this.setState({
      todos
    })

    
   
    console.log(value)
    
    const userInfo = Object.assign({},this.state.userInfo, {[name] : value})
    this.setState({
      userInfo
      }
    );

    if (this.checkRegexValid(e.target, patterns)) {
      this.setState({
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

  checkUserExistForSignIn = () => {
   
  }
  
  handleInputsForSignIn = e => {
    const userObj = JSON.parse(localStorage.getItem("users"));
    console.log(e.target.value);
    for(let {email, password} of userObj){

      // if((email === e.target.value) && (password === e.target.value)){
      //   console.log("correct email or password.");
      // }else{
      //   console.log("Incorrect username or password. ")
      // }
      if(email === e.target.value){
        console.log('email', email);
        console.log('e.target.value',e.target.value);
        console.log("The email is exist")
        this.setState({
          loginValid: {
            ...this.state.loginValid,
            [e.target.name]: true
          }})
      }else if(password === e.target.value){
        console.log('password', password);
        console.log('e.target.value',e.target.value);
        console.log("The password is exist")
        this.setState({
          loginValid: {
            ...this.state.loginValid,
            [e.target.name]: true
          }})
      }
  }
}
 
  handleSubmitForSignIn = e => {

    e.preventDefault();

    console.log(e);
    console.log(e.target);
    const data = new FormData(e.target);
    console.log(data);
    const loginValidStatus = {...this.state.loginValid};
    console.log(loginValidStatus);

    for(let signInInputs in loginValidStatus){
      if((loginValidStatus[signInInputs] === true)){
        alert("Let's go to next page");
      }else{
        console.log("Incorrect email or password")
      }
    }
  }

  handleFocus = () => {
    this.inputFocus.current.focus();
  };

  componentDidUpdate = () => {
    console.log("userInfo", this.state.userInfo);
        //Save the users in localStorage
        const users = [...this.state.users];
        localStorage.setItem("users", JSON.stringify(users, undefined, 4));
    // console.log("users", this.state.users);
    // console.log("regex Valid", this.state.regexValid);
    console.log("login valid", this.state.loginValid);
  };

  render() {
    return (
      <div>
        <SignUpForm
          userInfo={this.state.userInfo}
          regexValid={this.state.regexValid}
          handleInputs={this.handleInputs}
          handleSubmit={this.handleSubmit}
          handleFocus={this.handleFocus}
          inputFocus={this.inputFocus}
        />
        <SignInForm handleInputsForSignIn={this.handleInputsForSignIn} handleSubmitForSignIn={this.handleSubmitForSignIn}/>
      </div>
    );
  }
}

export default App;
