import React from "react";
import SignIn from "../../Components/Auth/SignIn.Component";
import SignUp from "../../Components/Auth/SignUp.Component";
import LogoBar from "../../Components/Navbar/LogoBar/LogoBar.Component";
import Footer from "../../Components/Footer/Footer.Component";
import "./auth.style.scss";
import { Container } from "semantic-ui-react";

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
                <button
                  className="ghost toggler"
                  id="signIn"
                  onClick={toggleClassHandler}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Don't Have An Account?</h1>
                <button
                  className="ghost toggler"
                  id="signUp"
                  onClick={toggleClassHandler}
                >
                  Sign Up
                </button>
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
