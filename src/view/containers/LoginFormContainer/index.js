import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import actions from "../../../store/rootActions";
import LoginForm from "../../components/LoginForm";

const LoginFormContainer = props => {
  const { isLoggedIn } = props;

  const handleLogin = data => {
    props.dispatchLogin(data);
  };

  if (isLoggedIn) {
    return <Redirect to="/sacola"/>;
  }
  return <LoginForm isLoggingIn={props.isLoggingIn} onLogin={handleLogin} />;
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  isLoggingIn: state.user.isLoggingIn,
  imageUrl: state.beers.selectedBeer.imageUrl,
  isLoadingSelectedBeer: state.beers.isLoadingSelectedBeer,
  error: state.beers.error
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: data => dispatch(actions.user.loginRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
