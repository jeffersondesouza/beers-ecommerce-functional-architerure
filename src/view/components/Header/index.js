import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header = props => {
  const { products } = props;

  return (
    <header className="Header">
      <div className="Header__brand">
        <Link to="/">
          <h1 className="Header__brand-logo">Suco de Cevadis</h1>
        </Link>
      </div>
      <nav className="MainNav">
        <ul className="MainNav__Links">
          <li className="MainNav__link">
            <Link to="/cervejas">Cervejis</Link>
          </li>
          <li className="MainNav__link">
            <Link to="/sacola">sacolis {products}</Link>
          </li>
          <div className="MainNav__auth">
            <li className="MainNav__link">
              <Link to="/login">login</Link>
            </li>
            {/*   <li className="MainNav__link">
              <Link to="/login">logout</Link>
            </li> */}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
