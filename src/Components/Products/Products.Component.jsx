import React from "react";
import { Container, Pagination } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProductItem from "../Products/ProductItem/ProductItem.Component";

import "./products.style.scss";

// showing all books for all page
const allProducts = products => {
  let items = Object.keys(products);

  return items.map(key =>
    products[key].map(product => (
      <ProductItem key={product.id} data={product} />
    ))
  );
};

// showing different categorized books on different routes
const speProducts = products => {
  let urlPrams = window.location.pathname.substr(1);
  let categorizedProducts = products[urlPrams];

  let currentPage = 1;
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentPosts = categorizedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(categorizedProducts.length / productsPerPage);

  let activePageee = 1;
  const onChange = (e, { activePage }) => {
    activePageee = activePage;
  };

  console.log(activePageee);

  return (
    <Container>
      <div className="products-con">
        {currentPosts.map(product => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>
      <Pagination
        activePage={activePageee}
        onPageChange={onChange}
        totalPages={totalPages}
        ellipsisItem={null}
      />
    </Container>
  );
};

const Products = ({ products }) => {
  return (
    <>
      {/* <div className="products-con"> */}
      {window.location.pathname === "/"
        ? allProducts(products)
        : speProducts(products)}
      {/* </div> */}
    </>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.data
});

export default connect(mapStateToProps)(withRouter(Products));
