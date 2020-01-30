import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../Custom-Button/Custom-button';
import CartItem from '../Cart-item/Cart-item.component';

import './Cart.dropdown.scss';
import { selectCartItems } from '../../redux/Cart/Cart.selectors.jsx';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems , history}) => {
  return (
    <div className="cart-dropdown">
       <div className="cart-items">
          {cartItems.length ? (
             cartItems.map((cartItem) => 
          {
            return <CartItem key={cartItem.id}  item={cartItem}/>
          })) : (<span className="empty-message">Your cart is empty</span>)
          }
       </div>
       <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)
   }

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));