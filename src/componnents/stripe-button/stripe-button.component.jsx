import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPPiLCYd0Zvl9kW2a80r2eQwM94EVyvYFaoaiZSmQfddYw2dhNmrF27Z0NMeF1tp4bz2OtuYMHIyDrDkjT7Bm4U00h8g2BDMz";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="My Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
