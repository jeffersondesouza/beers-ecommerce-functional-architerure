import React from "react";
import "./styles.scss";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div>
        <h2 className="LoginPage__title">Bora entrar?</h2>
        <form className="form">
          <div className="form-group">
            <label>Email</label>
            <input className="input" />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input className="input" />
          </div>
          <div className="form-action">
            <button className="btn">Fazer Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
