import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="form-container">
          <img src="./assets/logo-yardsale.png" alt="logo" className="logo" />
          <h1>Create a new password</h1>
          <p className="subtitle">Enter a new password for you account</p>
          <form action="/" className="form">
            <label for="password" className="label">
              Password
            </label>
            <input 
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
            <label for="new-password" className="label">
              Password
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="*********"
              className="input input-password"
            />
            <input
              type="submit"
              value="Confirm"
              className="primary-button login-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
