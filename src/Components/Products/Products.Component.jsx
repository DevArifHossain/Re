import React from "react";
import { Container } from "semantic-ui-react";
import ProductItem from "../Products/ProductItem/ProductItem.Component";
import "./products.style.scss";

const Products = () => {
  return (
    <Container>
      <div className="products-con">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </Container>
  );
};

export default Products;
