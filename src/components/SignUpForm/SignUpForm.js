import React from "react";
import Input from "../Input/Input";

const SignUpForm = props => {

  let {
    userInfo,
    regexValid,
    handleInputs,
    handleSubmit,
    handleFocus,
    inputFocus
  } = props;

  const typingHints = {
    firstName: "First name must be alphanumeric and contain 3 - 16 characters",
    lastName: "Last name must be alphanumeric and contain 3 - 16 characters",
    userName: "User name must be alphanumeric and contain 3 - 16 characters",
    email: "Email must be a valid address, e.g. example@example.com",
    password:
      "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters",
    phone: "A valid Telephone number (10 digits)"
  };

  const displayTypeHints = inputType => {
    if (regexValid[inputType] === false) {
      return typingHints[inputType];
    }
    return null;
  };

  const ableSubmitButton = () => {
    /* button disable=false make button clickable
       when all inputs are valid submit button will be able to click */
    return !(
      regexValid["firstName"] &&
      regexValid["lastName"] &&
      regexValid["userName"] &&
      regexValid["email"] &&
      regexValid["password"] &&
      regexValid["phone"]
    );
  };

  return (
    <div className="FormFieldwrapper">
      <form onSubmit={handleSubmit} className="signUpForm">
        <button onClick={handleFocus}>Sign Up</button>
        <Input
          inputelement={inputFocus}
          labelname="First Name"
          type="text"
          name="firstName"
          placeholder="First name"
          value={userInfo.firstName}
          onChange={handleInputs}
        />
        <p>{displayTypeHints("firstName")}</p>
        <Input
          labelname="Last Name"
          type="text"
          name="lastName"
          placeholder="Last name"
          value={userInfo.lastName}
          onChange={handleInputs}
        />
        <p>{displayTypeHints("lastName")}</p>
        <Input
          labelname="User Name"
          type="text"
          name="userName"
          placeholder="User name"
          value={userInfo.userName}
          onChange={handleInputs}
        />
        <p>{displayTypeHints("userName")}</p>
        <Input
          labelname="Email"
          type="text"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleInputs}
        />
        <p>{displayTypeHints("email")}</p>
        <Input
          labelname="Password"
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handleInputs}
        />
        <p>{displayTypeHints("password")}</p>
        <Input
          labelname="Phone"
          type="tel"
          name="phone"
          placeholder="telephone"
          value={userInfo.phone}
          onChange={handleInputs}
        />
        <p>{displayTypeHints("phone")}</p>
        <button type="submit" disabled={ableSubmitButton()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
