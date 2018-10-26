import React from "react";

function SignUpForm({ handleInputs, userInfo }) {
  return (
    <form className="signUpForm">
      <div className="FormField">
        <div className="FormField">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First name"
            className="FormInput"
            value={userInfo.firstname}
            onChange={e => handleInputs(e)}
          />
          <p>First name must be alphanumeric and contain 3 - 16 characters</p>
        </div>
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Last name"
          className="FormInput"
          value={userInfo.lastname}
          onChange={e => handleInputs(e)}
        />
        <p>Last name must be alphanumeric and contain 3 - 16 characters</p>
      </div>
      <div className="FormField">
      <label htmlFor="username">User Name</label>
      <input
          id="username"
          type="text"
          name="username"
          placeholder="User name"
          className="FormInput"
          value={userInfo.usename}
          onChange={e => handleInputs(e)}
        />
        <p>User name must be alphanumeric and contain 3 - 16 characters</p>
      </div>
      <div className="FormField">
      <label htmlFor="email">Email</label>
      <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          className="FormInput"
          value={userInfo.email}
          onChange={e => handleInputs(e)}
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
          value={userInfo.password}
          onChange={e => handleInputs(e)}
        />
        <p>
          Password must be alphanumeric (@, _ and - are also allowed) and
          between 6 - 20 characters
        </p>
      </div>
      <div className="FormField">
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          name="phone"
          placeholder="telephone"
          className="FormInput"
          value={userInfo.phone}
          onChange={e => handleInputs(e)}
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
          value={userInfo.bio}
          onChange={e => handleInputs(e)}
        />
        <p>
          Bio must contain only lowercase letters, numbers and hyphens and be 8
          - 50 characters
        </p>
      </div>
      <button type="submit" disabled>
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
