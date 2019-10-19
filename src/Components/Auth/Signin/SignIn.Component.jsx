import React, { Component } from "react";
import { Form, Button, Icon, Divider } from "semantic-ui-react";

import {
  auth,
  signInWithGoogle,
  signInWithFB,
  signInWithGithub
} from "../../../firebase/firebase.uitls";
import "./signin.style.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });

      alert("Singed In");
    } catch (error) {
      alert(error.message);
    }
  };

  onInputCange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container sign-in-container">
        <Form action="#" onSubmit={this.onFormSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <span className="social bg-google-col" onClick={signInWithGoogle}>
              <Icon name="google" />
            </span>
            <span className="social bg-fb-col" onClick={signInWithFB}>
              <Icon className="facebook f" />
            </span>
            <span className="social bg-github-col" onClick={signInWithGithub}>
              <Icon className="github" />
            </span>
          </div>

          <Divider horizontal>Or</Divider>

          <Form.Field>
            <label>Email Address</label>
            <input
              placeholder="xyz@xyz.com"
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onInputCange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="*************"
              id="password"
              name="password"
              type="password"
              className="validate"
              value={this.state.password}
              onChange={this.onInputCange}
            />
          </Form.Field>
          <Button secondary type="submit" style={{ marginTop: "1rem" }}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
