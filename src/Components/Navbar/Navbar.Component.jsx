import React from "react";
import { Container } from "semantic-ui-react";
import LogoBar from "./LogoBar/LogoBar.Component";
import BookNavbar from "./BookNavbar/BookNavbar.Component";

const Navbar = () => {
  return (
    <Container fluid>
      <LogoBar />
      <BookNavbar />
    </Container>
  );
};

export default Navbar;
