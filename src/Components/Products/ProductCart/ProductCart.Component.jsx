import React from "react";
import { connect } from "react-redux";
import { List, Divider, Button } from "semantic-ui-react";
import "./product-cart.style.scss";

const ProductChart = ({ productItems }) => {
  return (
    <div className="product-cart">
      <ul className="product-items">
        {productItems.length === 0 ? (
          <h2 className="not-added">No Product Added!!</h2>
        ) : (
          productItems.map(item => (
            <List className="item" key={item.id}>
              <img src={item.imgUrl} alt={item.title} />
              <div className="content">
                <h5 className="title">{item.title}</h5>
                <span>${item.price}</span>
                <span> X </span>
                <span>{item.quantity}</span>
              </div>
            </List>
          ))
        )}
      </ul>

      <Divider />
      <div className="checkout">
        <h3 className="total">$55.55</h3>
        <Button secondary>CHECKOUT</Button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  productItems: products.addedItems
});
export default connect(mapStateToProps)(ProductChart);
