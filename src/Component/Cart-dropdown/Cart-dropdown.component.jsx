import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../Custom-Button/Custom-button';
import CartItem from '../Cart-item/Cart-item.component';

import './Cart.dropdown.scss';
import { selectCartItems } from '../../redux/Cart/Cart.selectors';

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
       <div className="cart-items">
          {
             cartItems.map((cartItem) => 
          {
            return <CartItem key={cartItem.id}  item={cartItem}/>
          })
          }
       </div>
       <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
   }

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);