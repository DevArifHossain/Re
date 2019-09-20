import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
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
        <Button primary>View Details</Button>
        <Button>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default ProductItem;
