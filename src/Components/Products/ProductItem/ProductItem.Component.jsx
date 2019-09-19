import React from "react";
import { Card, Image } from "semantic-ui-react";
import catchingFire from "../../../assets/images/books/fiction/Catching-Fire.jpg";

import "./product-item.style.scss";

const ProductItem = () => {
  return (
    <Card className="product-card">
      <Image src={catchingFire} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Book Name</Card.Header>
        <Card.Meta>
          <span>Book Author</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <h3>Price</h3>
      </Card.Content>
    </Card>
  );
};

export default ProductItem;
