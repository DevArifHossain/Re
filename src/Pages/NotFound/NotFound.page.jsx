import React from "react";
import { Container, Icon } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Container>
      <Icon name="frown outline" size="massive" />
      <h1>404</h1>
      <h4>Page Not Found</h4>
    </Container>
  );
};

export default NotFound;
