import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // to get the price in cents
  const priceForStripe = price * 100;
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
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
