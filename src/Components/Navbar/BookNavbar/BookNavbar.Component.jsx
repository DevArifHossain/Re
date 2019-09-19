import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import "./bookNavbar.style.scss";

const BookNavbar = () => {
  return (
    <Container>
      <Menu pointing secondary className="book-navbar">
        <Menu.Item>
          <Link to="/">All</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/fiction">Fiction</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/history">History</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/mystery">Mystery</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/science">Science</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/fantasy">Fantasy</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/others">Others</Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default BookNavbar;
