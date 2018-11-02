import React from "react";
import Input from "../Input/Input";

const SignUpForm = (props) => {

  let { firstName, lastName, userName, email, password, phone, handleInputs, handleSubmit, handleFocus, inputFocus } = props;

  return (
    <div className="FormFieldwrapper">
      <form onSubmit={handleSubmit} className="signUpForm">
        <button onClick={handleFocus}>Sign Up</button>
        <Input
          inputelement={inputFocus}
          labelname="First Name"
          id="firstname"
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleInputs}
          typehint="First name must be alphanumeric and contain 3 - 16 characters"
        />
        <Input
          labelname="Last Name"
          id="lastname"
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={handleInputs}
          typehint="Last name must be alphanumeric and contain 3 - 16 characters"
        />
        <Input
          labelname="User Name"
          id="username"
          type="text"
          name="userName"
          placeholder="User name"
          value={userName}
          onChange={handleInputs}
          typehint=" User name must be alphanumeric and contain 3 - 16 characters"
        />
        <Input
          labelname="Email"
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputs}
          typehint="Email must be a valid address, e.g. example@example.com"
        />
        <Input
          labelname="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleInputs}
          typehint="Password must be alphanumeric (@, _ and - are also allowed) and
            between 6 - 20 characters"
        />
        <Input
          labelname="Phone"
          type="tel"
          name="phone"
          placeholder="telephone"
          value={phone}
          onChange={handleInputs}
          typehint="A valid Telephone number (11 digits)"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
