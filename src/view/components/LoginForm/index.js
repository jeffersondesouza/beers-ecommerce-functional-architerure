import React, { useState } from "react";

const LoginForm = ({ isLoggingIn, onLogin }) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChangeInput = event => {
    event.persist();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleLogin = event => {
    event.preventDefault();
    onLogin(formState);
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <div className="form-group">
        <label>Email</label>
        <input onChange={handleChangeInput} name="email" className="input" />
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input onChange={handleChangeInput} name="password" className="input" />
      </div>
      <div className="form-action">
        <button disabled={isLoggingIn} className="btn">
          Fazer Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
