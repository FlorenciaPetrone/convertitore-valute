import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/chisiamo" className="nav-link">
        chi siamo
      </Link>
      <Link to="/contatto" className="nav-link">
        contatto
      </Link>
    </div>
  );
};

export default Header;
