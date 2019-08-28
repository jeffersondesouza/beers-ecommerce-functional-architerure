import React from "react";

const LoginFormContainer = () => {
  return (
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
  );
};

export default LoginFormContainer;
