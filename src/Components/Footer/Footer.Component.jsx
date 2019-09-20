import React from 'react'
import {Icon, Container} from 'semantic-ui-react'
import "./footer.style.scss"

const Footer = () => {
  return (
    <footer className="reshop-footer">
      <Container fluid>
      <span className="copyright">
        &copy; Copyright RESHOP 2019 - Made by Codingeek
      </span>
      <span className="social-links">
        <Icon name="facebook" />
        <Icon name="twitter" />
        <Icon name="linkedin" />
      </span>
      </Container>
    </footer>
  )
}

export default Footer