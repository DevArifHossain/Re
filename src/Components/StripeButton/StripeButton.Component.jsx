import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

const StripeButton = ({ totalPrice }) => {
  // to get the price in cents
  const priceForStripe = totalPrice * 100;
  // Replace this with your publish key
  const publishableKey = "pk_test_8h0rjNz8pZTfcJuOSrwpkHE900KjFkVRRK";

  const onToken = token => {
    alert("Payment Successful!!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ReShop"
      billingAddress
      currency="USD"
      shippingAddress
      description={`Your total is $${totalPrice}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = ({ products }) => ({
  totalPrice: products.addedItems.reduce(
    (totalP, item) => totalP + item.quantity * item.price,
    0
  )
});

export default connect(mapStateToProps)(StripeButton);
