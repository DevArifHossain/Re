import React, { Component } from "react";
import { connect } from "react-redux";

import SuccessMessage from "../../Components/Message/SuccessMessage/SuccessMessage.Component";
import LogoBar from "../../Components/Navbar/LogoBar/LogoBar.Component";
import SimpleSlider from "../../Components/Products/FeaturedProducts/FeaturedProducts.Component";
import BookNavbar from "../../Components/Navbar/BookNavbar/BookNavbar.Component";
import Products from "../../Components/Products/Products.Component";
// import Pagination from "../../Components/Pagination/Pagination.Component";
import Footer from "../../Components/Footer/Footer.Component";

import "./homepage.style.scss";

class Homepage extends Component {
  state = {
    alert: false
  };

  render() {
    const change = () => {
      this.setState({
        alert: !this.state.alert
      });
    };
    return (
      <>
        {this.state.alert && <SuccessMessage />}
        <button onClick={change}>Click Me</button>
        <LogoBar />
        <SimpleSlider />
        <BookNavbar />
        <Products />
        {/* <Pagination /> */}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ products }) => ({
  products: products.data,
  addedItems: products.addedItems
});

export default connect(mapStateToProps)(Homepage);
