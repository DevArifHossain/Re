import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { auth, createUserProfileDoc } from "../../../firebase/firebase.uitls";
import "./signup.style.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  onFormSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords dont't match!!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });

      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    } catch (error) {
      console.log(error);
    }
  };

  onInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="form-container sign-up-container">
        <Form action="#" onSubmit={this.onFormSubmit}>
          <h1>Create Account</h1>
          <Form.Field className="input-field">
            <label htmlFor="displayName">Full Name</label>
            <input
              placeholder="John Doe"
              name="displayName"
              onChange={this.onInputChange}
              value={displayName}
              type="text"
              className="validate"
              required
            />
          </Form.Field>
          <Form.Field className="input-field">
            <label htmlFor="email">Email Address</label>
            <input
              placeholder="john.doe@gmail.com"
              name="email"
              type="email"
              onChange={this.onInputChange}
              value={email}
              className="validate"
              required
            />
          </Form.Field>
          <Form.Field className="input-field">
            <label htmlFor="password">Password</label>
            <input
              placeholder="****************"
              type="password"
              name="password"
              onChange={this.onInputChange}
              value={password}
              className="validate"
              required
            />
          </Form.Field>
          <Form.Field className="input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              placeholder="****************"
              type="password"
              name="confirmPassword"
              onChange={this.onInputChange}
              value={confirmPassword}
              className="validate"
              required
            />
          </Form.Field>
          <Button secondary type="submit" style={{ marginTop: "1rem" }}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
