import React from "react";
import { Container } from "semantic-ui-react";
import {uid} from 'react-uid';
import books from '../../data/booksData'
import ProductItem from "../Products/ProductItem/ProductItem.Component";
import "./products.style.scss";

class Products extends React.Component {

  state = {
    productData: books
  }

  render() {
    const {fiction, mystery, history, fantasy, science, others} = this.state.productData
    return(
      <Container fluid>
      <div className="products-con">
        {
          fiction.map(fic => <ProductItem key={uid(fic)} data={fic} />)
        }
        {
          mystery.map(mys => <ProductItem key={uid(mys)} data={mys} />) 
        }
      </div>
    </Container>
    )
  }
}

export default Products;
