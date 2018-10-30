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
    status: "signUp"
  };

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

    console.log("users", this.state.users);
  };

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
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signUpForm">
          <Input />
          <div className="FormFieldwrapper">
            <div className="FormField">
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                type="text"
                name="firstName"
                placeholder="First name"
                className="FormInput"
                value={firstName}
                onChange={this.handleInputs}
              />
              <p>
                First name must be alphanumeric and contain 3 - 16 characters
              </p>
            </div>
            <div className="FormField">
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                type="text"
                name="lastName"
                placeholder="Last name"
                className="FormInput"
                value={lastName}
                onChange={this.handleInputs}
              />
              <p>
                Last name must be alphanumeric and contain 3 - 16 characters
              </p>
            </div>
            <div className="FormField">
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                name="userName"
                placeholder="User name"
                className="FormInput"
                value={userName}
                onChange={this.handleInputs}
              />
              <p>
                User name must be alphanumeric and contain 3 - 16 characters
              </p>
            </div>
            <div className="FormField">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                className="FormInput"
                value={email}
                onChange={this.handleInputs}
              />
              <p>Email must be a valid address, e.g. example@example.com</p>
            </div>
            <div className="FormField">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="FormInput"
                value={password}
                onChange={this.handleInputs}
              />
              <p>
                Password must be alphanumeric (@, _ and - are also allowed) and
                between 6 - 20 characters
              </p>
            </div>
            <div className="FormField">
              <label htmlFor="phone">phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="telephone"
                className="FormInput"
                value={phone}
                onChange={this.handleInputs}
              />
              <p>A valid Telephone number (11 digits)</p>
            </div>
            <div className="FormField">
              <label htmlFor="htmlFor">Bio</label>
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                className="FormInput"
                value={bio}
                onChange={this.handleInputs}
              />
              <p>
                Bio must contain only lowercase letters, numbers and hyphens and
                be 8 - 50 characters
              </p>
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
