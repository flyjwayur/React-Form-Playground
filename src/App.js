import React, { Component } from "react";
import "./App.css";

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
      [e.target.name]: e.target.value.toLowerCase()
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const users = this.state.users;

    users.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      bio: this.state.bio
    });

    this.setState({
      users
    });

  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit} className="signUpForm">
          <div className="FormField">
            <div className="FormField">
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                type="text"
                name="firstName"
                placeholder="First name"
                className="FormInput"
                value={this.state.firstName}
                onChange={e => this.handleInputs(e)}
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
                value={this.state.lastName}
                onChange={e => this.handleInputs(e)}
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
                value={this.state.userName}
                onChange={e => this.handleInputs(e)}
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
                value={this.state.email}
                onChange={e => this.handleInputs(e)}
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
                value={this.state.password}
                onChange={e => this.handleInputs(e)}
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
                value={this.state.phone}
                onChange={e => this.handleInputs(e)}
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
                value={this.state.bio}
                onChange={e => this.handleInputs(e)}
              />
              <p>
                Bio must contain only lowercase letters, numbers and hyphens and
                be 8 - 50 characters
              </p>
            </div>
            <button type="submit">Submit</button>
            <h2> {this.state.users}</h2>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
