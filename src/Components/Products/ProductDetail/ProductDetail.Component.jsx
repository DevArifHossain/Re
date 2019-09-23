import React from "react";
import { Modal, Image, Button } from "semantic-ui-react";
import productImage from "../../../assets/images/books/fiction/Catching-Fire.jpg";

import "./product-detail.style.scss";

const ProductDetail = ({ data }) => {
  const { title, author, length, price, publisher, language } = data;

  return (
    <Modal
      trigger={<Button>View Details</Button>}
      className="product-detail-modal"
    >
      <Modal.Content image>
        <Image wrapped size="medium" src={productImage} />
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
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ProductDetail;
