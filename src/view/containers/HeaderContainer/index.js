import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";

const HeaderContainer = props => {
  const { products } = props;

  return (
    <>
      <Header products={products} />
    </>
  );
};

const mapStateToProps = state => ({
  products: state.shoppingCart.products.length
});

export default connect(mapStateToProps)(HeaderContainer);
