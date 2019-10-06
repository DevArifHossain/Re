import React from "react";
import { connect } from "react-redux";
import { Container, Image, Table, Button } from "semantic-ui-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featured-products.style.scss";
import { addProductAction } from "../../../redux/products/productAction";

const FeaturedProducts = ({ addItem, featuredItems }) => {
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
          {featuredItems.map(item => (
            <div className="featured-product" key={item.id}>
              <Image src={item.imgUrl} alt={item.title} size="medium" />
              <div className="content">
                <h1 className="product-title">{item.title}</h1>
                <h2 className="product-price">$ {item.price}</h2>

                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={2}>Author</Table.Cell>
                      <Table.Cell>{item.author}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Publisher</Table.Cell>
                      <Table.Cell>{item.publisher}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Length</Table.Cell>
                      <Table.Cell>{item.length}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Language</Table.Cell>
                      <Table.Cell>{item.language}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

                <Button secondary onClick={() => addItem(item)}>
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

const mapStateToProps = ({ products }) => ({
  featuredItems: products.featuredItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addProductAction(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedProducts);
