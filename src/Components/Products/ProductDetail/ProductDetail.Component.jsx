import React from "react";
import { Modal, Image, Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import { addProductAction } from "../../../redux/products/productAction";
import "./product-detail.style.scss";

const ProductDetail = ({ data, addedItem, addItem }) => {
  const { title, author, length, price, publisher, language, imgUrl } = data;

  return (
    <Modal
      trigger={<Button>View Details</Button>}
      className="product-detail-modal"
    >
      <Modal.Content image>
        <Image wrapped size="medium" src={imgUrl} />
        <Modal.Description>
          <h1 className="product-title">{title}</h1>
          <h2 className="product-price">
            $ {price}
            <sup>{addedItem ? " x " + addedItem.quantity : ""}</sup>
          </h2>
          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={2}>Author</Table.Cell>
                <Table.Cell>{author}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Publisher</Table.Cell>
                <Table.Cell>{publisher}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Length</Table.Cell>
                <Table.Cell>{length}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Language</Table.Cell>
                <Table.Cell>{language}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Button secondary onClick={() => addItem(data)}>
            Add To Chart
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addProductAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductDetail);
