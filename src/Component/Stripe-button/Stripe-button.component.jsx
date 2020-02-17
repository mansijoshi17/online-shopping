import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StripeCheckoutButton = ({ price }) => {

    const PriceForStripe = price * 100;
    const PublishableKey = 'pk_test_v8bPn1HjupstClUBIscFcEjw006R26gq5g';

    //  const onToken = token => {
    //       console.log(token);
    //       alert("Payment Successful");
    //   }

    const notify = (token) => toast.success("Payment Successful!");

    return (
        <div>
            <StripeCheckout
                label="Pay Now"
                name="CRWN Clothing Ltd."
                billingAddress
                shippingAddress
                image="https://svgshare.com/i/CUz.svg"
                description={`Your total is $${price}`}
                amount={PriceForStripe}
                panelLabel="Pay Now"
                token={notify}
                stripeKey={PublishableKey}
            />
            <ToastContainer />
        </div>
    )

}

export default StripeCheckoutButton;