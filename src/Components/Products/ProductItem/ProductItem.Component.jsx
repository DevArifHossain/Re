import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import ProductDetail from "../ProductDetail/ProductDetail.Component";
import { addProductAction } from "../../../redux/products/productAction";

import "./product-item.style.scss";

const ProductItem = ({ data, addItem }) => {
  const { title, author, price, imgUrl } = data;
  return (
    <Card className="product-card">
      <Image src={imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <h3 className="price">{price.toFixed(2)} $</h3>
      </Card.Content>

      <div className="product-card__overaly">
        <ProductDetail data={data} />
        <Button primary onClick={() => addItem(data)}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

const mapDispathToProps = dispatch => ({
  addItem: item => dispatch(addProductAction(item))
});

export default connect(
  null,
  mapDispathToProps
)(ProductItem);
