import React from 'react'; 

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/Cart/Cart.selectors.jsx';

import './Checkout.scss';
import CartItem from '../../Component/Cart-item/Cart-item.component.jsx';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => {
                return cartItem.name
            })
        }
        <div className="total">
    <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
       cartItems : selectCartItems,
       total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);