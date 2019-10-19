import React from "react";
import SignIn from "../../Components/Auth/Signin/SignIn.Component";
import SignUp from "../../Components/Auth/Signup/SignUp.Component";
import LogoBar from "../../Components/Navbar/LogoBar/LogoBar.Component";
import Footer from "../../Components/Footer/Footer.Component";
import "./auth.style.scss";
import { Container, Button } from "semantic-ui-react";

const Auth = () => {
  const toggleClassHandler = () => {
    const container = document.getElementById("container");
    container.classList.toggle("right-panel-active");
  };

  return (
    <>
      <LogoBar />
      <Container>
        <div className="auth-container" id="container">
          <SignIn />
          <SignUp />

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Already Have An Account?</h1>
                <Button id="signIn" onClick={toggleClassHandler}>
                  Sign In
                </Button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Don't Have An Account?</h1>
                <Button id="signUp" onClick={toggleClassHandler}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Auth;
