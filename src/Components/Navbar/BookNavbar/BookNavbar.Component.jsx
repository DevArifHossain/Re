import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import "./bookNavbar.style.scss";

const BookNavbar = () => {
  return (
    <Container>
      <Menu pointing secondary className="book-navbar">
        <Menu.Item>
          <NavLink exact activeClassName="active-nav-link" to="/">
            All
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact activeClassName="active-nav-link" to="/fiction">
            Fiction
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact activeClassName="active-nav-link" to="/history">
            History
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact activeClassName="active-nav-link" to="/mystery">
            Mystery
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact activeClassName="active-nav-link" to="/science">
            Science
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact activeClassName="active-nav-link" to="/fantasy">
            Fantasy
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active-nav-link" to="/others">
            Others
          </NavLink>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default BookNavbar;
