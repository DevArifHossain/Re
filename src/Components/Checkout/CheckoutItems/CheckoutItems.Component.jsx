import React from "react";
import { connect } from "react-redux";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { addProductAction } from "../../../redux/products/productAction";

const CheckoutItems = ({ products, addProduct }) => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Image</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Sub Total</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {products.map(item => (
          <Table.Row key={item.id}>
            <Table.Cell>
              <Image src={item.imgUrl} alt={item.title} size="tiny"></Image>
            </Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>$ {item.price}</Table.Cell>
            <Table.Cell>
              <Button.Group secondary>
                <Button icon>
                  <Icon name="minus" />
                </Button>
                <Button>{item.quantity}</Button>
                <Button icon onClick={() => addProduct(item)}>
                  <Icon name="plus" />
                </Button>
              </Button.Group>
            </Table.Cell>
            <Table.Cell>
              $ {(Number(item.price) * item.quantity).toFixed(2)}
            </Table.Cell>
            <Table.Cell>
              <Button color="red">Remove</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.addedItems
});

const mapDispatchToProps = dispatch => ({
  addProduct: item => dispatch(addProductAction(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutItems);
