import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";

class App extends Component {
  state = {
    fistName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    users: [],
    status: "signUp",
  };

  inputelement = React.createRef()

  handleInputs = e => {
    console.log("from e", e.target.value);
    console.log("from e", e.target.name);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const users = [
      ...this.state.users,
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        bio: this.state.bio
      }
    ];

    this.setState({
      users
    });

  };

  handleFocus = () => {
    this.inputelement.current.focus();
  }

  componentDidUpdate = () => {
    console.log("users", this.state.users);
  }

  render() {
    let {
      firstName,
      lastName,
      userName,
      email,
      password,
      phone,
      bio
    } = this.state;

    return (
      <div className="FormFieldwrapper">
        <form onSubmit={this.handleSubmit} className="signUpForm">
        <button onClick={this.handleFocus}>Sign Up</button>
          <Input
            inputelement = {this.inputelement}
            labelname="First Name"
            id="firstname"
            type="text"
            name="firstName"
            placeholder="First name"
            className="FormInput"
            value={firstName}
            onChange={this.handleInputs}
            typehint="First name must be alphanumeric and contain 3 - 16 characters"
          />
          <Input
            labelname="Last Name"
            id="lastname"
            type="text"
            name="lastName"
            placeholder="Last name"
            className="FormInput"
            value={lastName}
            onChange={this.handleInputs}
            typehint="Last name must be alphanumeric and contain 3 - 16 characters"
          />
          <Input
            labelname="User Name"
            id="username"
            type="text"
            name="userName"
            placeholder="User name"
            className="FormInput"
            value={userName}
            onChange={this.handleInputs}
            typehint=" User name must be alphanumeric and contain 3 - 16 characters"
          />
          <Input
            labelname="Email"
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            className="FormInput"
            value={email}
            onChange={this.handleInputs}
            typehint="Email must be a valid address, e.g. example@example.com"
          />
          <Input
            labelname="Password"
            type="password"
            name="password"
            placeholder="password"
            className="FormInput"
            value={password}
            onChange={this.handleInputs}
            typehint="Password must be alphanumeric (@, _ and - are also allowed) and
                    between 6 - 20 characters"
          />
          <Input
            labelname="Phone"
            type="tel"
            name="phone"
            placeholder="telephone"
            className="FormInput"
            value={phone}
            onChange={this.handleInputs}
            typehint="A valid Telephone number (11 digits)"
          />
          <Input
            labelname="Bio"
            type="text"
            name="bio"
            placeholder="Bio"
            className="FormInput"
            value={bio}
            onChange={this.handleInputs}
            typehint="Bio must contain only lowercase letters, numbers and hyphens and be 8 - 50 characters"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
