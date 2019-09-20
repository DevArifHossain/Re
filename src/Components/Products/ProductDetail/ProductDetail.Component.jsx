import React from "react";
import { Modal, Image,  Button } from "semantic-ui-react";
import productImage from "../../../assets/images/books/fiction/Catching-Fire.jpg";

import "./product-detail.style.scss"

const ProductDetail = () => {
  return (
    <Modal trigger={<Button>View Details</Button>} className="product-detail-modal">
      <Modal.Content image>
        <Image wrapped size="medium" src={productImage} />
        <Modal.Description>
          <h1 className="product-title">Catching fire</h1>
          <h2 className="product-price">$6.99</h2>
          <ul className="product-details">
            <li>
              <span className="type">Author :</span>
              <span className="result">Author Name</span>
            </li>
            <li>
              <span className="type">Publisher :</span>
              <span className="result">Publisher Name</span>
            </li>
            <li>
              <span className="type">Length :</span>
              <span className="result">Book Pages</span>
            </li>
            <li>
              <span className="type">Language :</span>
              <span className="result">English</span>
            </li>
          </ul>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ProductDetail;
