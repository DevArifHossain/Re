import React from "react";
import { Container, Icon, Grid } from "semantic-ui-react";
import "./features.style.scss";

const Features = () => (
  <Container>
    <div className="features">
      <Grid stackable columns={4} divided textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <div className="feature">
              <Icon name="shipping fast" />
              <h3>Fast Delivery</h3>
              <p className="grey-text text-darken-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="feature">
              <Icon name="headphones" />
              <h3>24/7 Support</h3>
              <p className="grey-text text-darken-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="feature">
              <Icon name="redo" />
              <h3>Return Policy</h3>
              <p className="grey-text text-darken-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="feature">
              <Icon name="credit card outline" />
              <h3>Secure Payment</h3>
              <p className="grey-text text-darken-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Container>
);

export default Features;
