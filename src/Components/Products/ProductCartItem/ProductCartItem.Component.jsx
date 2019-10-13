import React from "react";
import { connect } from "react-redux";
import { List, Icon } from "semantic-ui-react";
import { removeProductAction } from "../../../redux/products/productAction";

const ProductCartItem = ({ item, removeProduct }) => {
  return (
    <List className="item" key={item.id}>
      <img src={item.imgUrl} alt={item.title} />
      <div className="content">
        <h5 className="title">{item.title}</h5>
        <span>${item.price.toFixed(2)}</span>
        <span> X </span>
        <span>{item.quantity}</span>
      </div>
      <Icon
        name="trash alternate"
        color="red"
        onClick={() => removeProduct(item)}
      />
    </List>
  );
};

const mapDispatchToProps = dispatch => ({
  removeProduct: item => dispatch(removeProductAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCartItem);
