import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ProductDetail from "../ProductDetail/ProductDetail.Component";

import catchingFire from "../../../assets/images/books/fiction/Catching-Fire.jpg";

import "./product-item.style.scss";

const ProductItem = ({ data }) => {
  const { title, author, price } = data;
  return (
    <Card className="product-card">
      <Image src={catchingFire} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <h3>{price} $</h3>
      </Card.Content>

      <div className="product-card__overaly">
        <ProductDetail data={data} />
        <Button primary>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default ProductItem;
