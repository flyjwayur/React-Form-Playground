import React from "react";
import Input from "../Input/Input";

const SignInForm = props => {
  let { email, password, handleInputsForSignIn, handleSubmitForSignIn, inputFocus, handleFocus} = props;

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
  };

  return (
    <div className="FormFieldwrapper">
          {/* <button onClick={handleFocus}>Sign In</button> */}
      <form onSubmit={handleSubmitForSignIn} className="signUpForm">
        <Input
          labelname="Email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputsForSignIn}
        />
        <Input
          labelname="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleInputsForSignIn}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
