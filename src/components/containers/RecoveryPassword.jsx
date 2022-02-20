import React from "react";
import logo from "../../assets/logo-yardsale.png";
import iconMsg from "../../assets/icon-mensaje_ccexpress.png";

const RecoveryPassword = () => {
  return (
    <div>
      <div className="login">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
          <h1>Email has been sent!</h1>
          <p className="subtitle">
            Please check your inbox for instructions on how to reset the
            password
          </p>
          <div className="email-image">
            <img src={iconMsg} alt="email" />
          </div>
          <button className="primary-button login-button">Login</button>
          <p className="resend">
            <span>Didn't receive the email? </span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPassword;
