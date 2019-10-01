import React from "react";
import LogoBar from "../../Components/Navbar/LogoBar/LogoBar.Component";
import SimpleSlider from "../../Components/Products/FeaturedProducts/FeaturedProducts.Component";
import BookNavbar from "../../Components/Navbar/BookNavbar/BookNavbar.Component";
import Products from "../../Components/Products/Products.Component";
import Footer from "../../Components/Footer/Footer.Component";

export default function Homepage() {
  return (
    <>
      <LogoBar />
      <SimpleSlider />
      <BookNavbar />
      <Products />
      <Footer />
    </>
  );
}
