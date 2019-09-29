import React from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import "./product-cart.style.scss";

const ProductChart = ({ productItems }) => {
  return (
    <div className="product-cart">
      <ul className="product-items">
        {productItems.map(item => (
          <List className="item" key={item.id}>
            <img src={item.imgUrl} alt={item.title} />
            <div className="content">
              <h5 className="title">{item.title}</h5>
              <span>${item.price}</span>
              <span> X </span>
              <span>{item.quantity}</span>
            </div>
          </List>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  productItems: products.addedItems
});
export default connect(mapStateToProps)(ProductChart);
