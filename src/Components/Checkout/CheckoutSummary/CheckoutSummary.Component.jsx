import React from "react";
import { connect } from "react-redux";
import "./checkout-summary.style.scss";

const CheckoutSummary = ({ productQuantity, totalPrice }) => {
  return (
    <div className="checkout-summary">
      <span className="total items">Total Items : {productQuantity}</span>
      <span className="total price">
        Total Price : {totalPrice.toFixed(2)} $
      </span>
      <span className="remove-item"></span>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  productQuantity: products.addedItems.reduce(
    (totalQ, item) => totalQ + item.quantity,
    0
  ),
  totalPrice: products.addedItems.reduce(
    (totalP, item) => totalP + item.quantity * item.price,
    0
  )
});

export default connect(mapStateToProps)(CheckoutSummary);
