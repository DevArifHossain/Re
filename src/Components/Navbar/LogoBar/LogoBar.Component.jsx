import React from "react";
import { Icon, Container, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./logo-bar.style.scss";

import { auth } from "../../../firebase/firebase.uitls";
import ProductCart from "../../Products/ProductCart/ProductCart.Component";

class LogoBar extends React.Component {
  state = {
    showCart: false
  };
  render() {
    const cartVisibilityHandler = () => {
      this.setState({
        showCart: !this.state.showCart
      });
    };

    const { productQuantity } = this.props;
    // const userEmail = this.props.user ? this.props.user.email : "not now";
    // console.log(userEmail);
    return (
      <Container fluid>
        <nav className="logo-bar">
          <Link to="/" className="nav-logo">
            <span style={{ color: "#61DBFB", fontWeight: "bold" }}>Re</span>Shop
          </Link>
          <span className="re-cart" onClick={cartVisibilityHandler}>
            <span className="cart">
              <Icon name="shopping bag" />
              Cart :
            </span>
            <span className="items">{productQuantity} Items</span>
          </span>
          {this.state.showCart && <ProductCart />}

          <Link to="/auth">
            {this.props.user ? (
              <Button color="red" onClick={() => auth.signOut()}>
                Logout
              </Button>
            ) : (
              <Button color="blue">Login</Button>
            )}
          </Link>
        </nav>
      </Container>
    );
  }
}

const mapStateToProps = ({ products, users }) => ({
  productQuantity: products.addedItems.reduce(
    (totalQ, item) => totalQ + item.quantity,
    0
  ),
  user: users.currentUser
});

export default connect(mapStateToProps)(LogoBar);
