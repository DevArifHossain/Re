import React from "react";
import { Modal, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import { addProductAction } from "../../../redux/products/productAction";
import "./product-detail.style.scss";

const ProductDetail = ({ data, addItem, productQuantity }) => {
  const { title, author, length, price, publisher, language, imgUrl } = data;

  // const addItemHandler = () => {};

  return (
    <Modal
      trigger={<Button>View Details</Button>}
      className="product-detail-modal"
    >
      <Modal.Content image>
        <Image wrapped size="medium" src={imgUrl} />
        <Modal.Description>
          <h1 className="product-title">{title}</h1>
          <h2 className="product-price">$ {price}</h2>
          <ul className="product-details">
            <li>
              <span className="type">Author :</span>
              <span className="result">{author}</span>
            </li>
            <li>
              <span className="type">Publisher :</span>
              <span className="result">{publisher}</span>
            </li>
            <li>
              <span className="type">Length :</span>
              <span className="result">{length} Pages</span>
            </li>
            <li>
              <span className="type">Language :</span>
              <span className="result">{language}</span>
            </li>
          </ul>

          {/* TODO: show indivisual items */}
          {/* <form className="product-quntity-form"> */}
          {/* <input type="text" value={productQuantity} /> */}
          <Button secondary onClick={() => addItem(data)}>
            Add To Chart
          </Button>
          {/* </form> */}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addProductAction(item))
});

const mapStateToProps = ({ products }) => ({
  productQuantity: products.addedItems.reduce(
    (totalQ, item) => totalQ + item.quantity,
    0
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
