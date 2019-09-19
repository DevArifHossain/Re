import React from "react";
import { Icon } from "semantic-ui-react";
import "./logo-bar.style.scss";

const LogoBar = () => {
  return (
    <nav className="logo-bar">
      <span className="nav-logo">
        <span style={{ color: "#61DBFB", fontWeight: "bold" }}>Re</span>Shop
      </span>
      <span className="re-cart">
        <span className="cart">
          <Icon name="shopping bag" />
          Cart :
        </span>
        <span className="items">0 Items</span>
      </span>
    </nav>
  );
};

export default LogoBar;
