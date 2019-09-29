import React from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import "./logo-bar.style.scss";

import ProductCart from "../../Products/ProductCart/ProductCart.Component";

const LogoBar = ({ productQuantity }) => {
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
        <span className="items">{productQuantity} Items</span>
      </span>
      <ProductCart />
    </nav>
  );
};

const mapStateToProps = ({ products }) => ({
  productQuantity: products.addedItems.reduce(
    (totalQ, item) => totalQ + item.quantity,
    0
  )
});

export default connect(mapStateToProps)(LogoBar);
