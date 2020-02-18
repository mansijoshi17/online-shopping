import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';



const StripeCheckoutButton = ({ price }) => {

    const PriceForStripe = price * 100;
    const PublishableKey = 'pk_test_v8bPn1HjupstClUBIscFcEjw006R26gq5g';


    const notify = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: PriceForStripe,
                token
            }
        }).then(response => {
            toast.success("Payment Successful!");
        }).catch(error => {
            toast.warn("There was an issue with your payment");
            })
    }

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