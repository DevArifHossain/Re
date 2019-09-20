import React from "react";
import { Card, Image, Modal, Button } from "semantic-ui-react";
import ProductDetail from '../ProductDetail/ProductDetail.Component'

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


      {/* Details Overlay */}
      <div className="product-card__overaly">
          <ProductDetail />
        <Button primary>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default ProductItem;
