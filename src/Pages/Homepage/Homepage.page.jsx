import React from "react";
import { connect } from "react-redux";

import LogoBar from "../../Components/Navbar/LogoBar/LogoBar.Component";
import SimpleSlider from "../../Components/Products/FeaturedProducts/FeaturedProducts.Component";
import BookNavbar from "../../Components/Navbar/BookNavbar/BookNavbar.Component";
import Products from "../../Components/Products/Products.Component";
import Footer from "../../Components/Footer/Footer.Component";

import "./homepage.style.scss";

const Homepage = () => {
  return (
    <>
      <LogoBar />
      <SimpleSlider />
      <BookNavbar />
      <Products />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.data,
  addedItems: products.addedItems
});

export default connect(mapStateToProps)(Homepage);
