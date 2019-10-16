import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserProfileDoc } from "./firebase/firebase.uitls";
import { createUserAction } from "./redux/users/userAction";

import Homepage from "./Pages/Homepage/Homepage.page";
import Checkout from "./Pages/Checkout/Checkout.page";
import Auth from "./Pages/Auth/Auth.Page";
import NotFound from "./Pages/NotFound/NotFound.page";

class App extends Component {
  unSubcribeFromAuth = null;

  componentDidMount() {
    const { createUserAction } = this.props;
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          createUserAction({
            id: snapshot.id,
            ...snapshot.data()
          });
        });

        console.log(userAuth);
      }

      createUserAction(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/auth"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <Auth />
          }
        />
        <Route exact path="/404" component={NotFound} />
        <Route path="/" component={Homepage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = dispatch => ({
  createUserAction: user => dispatch(createUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
