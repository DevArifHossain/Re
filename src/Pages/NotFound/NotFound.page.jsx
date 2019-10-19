import React from "react";
import { Container } from "semantic-ui-react";
import "./not-found.style.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <Container className="not-found__container">
        <h1>404</h1>
        <h2>
          sorry, the page is not found!{" "}
          <span role="img" aria-label="sad emoji">
            😔😔
          </span>
        </h2>
      </Container>
    </div>
  );
};

export default NotFound;
