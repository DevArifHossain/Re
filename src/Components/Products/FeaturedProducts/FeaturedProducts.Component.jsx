import React from "react";
import { connect } from "react-redux";
import { Container, Image, Table, Button } from "semantic-ui-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featured-products.style.scss";
import featuredProducts from "../../../data/featuredBooks";
import { addProductAction } from "../../../redux/products/productAction";

const FeaturedProducts = ({ addItem }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="featured-products">
      <Container>
        <Slider {...settings}>
          {featuredProducts.map(product => (
            <div className="featured-product" key={product.id}>
              <Image src={product.imgUrl} alt={product.title} size="medium" />
              <div className="content">
                <h1 className="product-title">{product.title}</h1>
                <h2 className="product-price">$ {product.price}</h2>

                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Author</Table.Cell>
                      <Table.Cell>{product.author}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Publisher</Table.Cell>
                      <Table.Cell>{product.publisher}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Length</Table.Cell>
                      <Table.Cell>{product.length}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Language</Table.Cell>
                      <Table.Cell>{product.language}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

                <Button secondary onClick={() => addItem(product)}>
                  Add To Chart
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addProductAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(FeaturedProducts);
