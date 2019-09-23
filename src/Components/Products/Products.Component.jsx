import React from "react";
import { Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { uid } from "react-uid";
import books from "../../data/booksData";
import ProductItem from "../Products/ProductItem/ProductItem.Component";
import "./products.style.scss";

// showing all books for all page
const allBooks = () => {
  let items = Object.keys(books);

  return items.map(key =>
    books[key].map(book => <ProductItem key={uid(book)} data={book} />)
  );
};

// showing different categorized books on different routes
const speBooks = () => {
  let urlPrams = window.location.pathname.substr(1);

  return books[urlPrams].map(book => (
    <ProductItem key={uid(book)} data={book} />
  ));
};

class Products extends React.Component {
  state = {
    productData: books
  };

  render() {
    return (
      <Container fluid>
        <div className="products-con">
          {window.location.pathname === "/" ? allBooks() : speBooks()}
        </div>
      </Container>
    );
  }
}

export default withRouter(Products);
