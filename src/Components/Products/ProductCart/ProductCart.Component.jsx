import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Button } from "semantic-ui-react";

import ProductChartItem from "../ProductCartItem/ProductCartItem.Component";
import "./product-cart.style.scss";

const ProductChart = ({ productItems, totalPrice }) => {
  return (
    <div className="product-cart">
      <ul className="product-items">
        {productItems.length === 0 ? (
          <h2 className="not-added">No Product Added!!</h2>
        ) : (
          productItems.map(item => (
            <ProductChartItem item={item} key={item.id} />
          ))
        )}
      </ul>

      <Divider />
      <div className="checkout">
        <h3 className="total">$ {totalPrice.toFixed(2)}</h3>
        <Button secondary>
          <Link to="/checkout">CHECKOUT</Link>
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  productItems: products.addedItems,
  totalPrice: products.addedItems.reduce(
    (totalP, item) => totalP + item.quantity * item.price,
    0
  )
});

export default connect(mapStateToProps)(ProductChart);
