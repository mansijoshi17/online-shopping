import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    
    const PriceForStripe = price * 100;
    const PublishableKey = 'pk_test_v8bPn1HjupstClUBIscFcEjw006R26gq5g';

 const onToken = token => {
      console.log(token);
      alert("Payment Successful");
  }

    return(
        <StripeCheckout
        label="Pay Now"
        name = "CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description = {`Your total is $${price}`}
        amount = {PriceForStripe}
        panelLabel = "Pay Now"
        token={onToken}
        stripeKey = {PublishableKey}
        />
    )

}

export default StripeCheckoutButton;