import React from "react";
import "./styles.scss";

import LoginFormContainer from "../../containers/LoginFormContainer";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div>
        <h2 className="LoginPage__title">Bora entrar?</h2>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
