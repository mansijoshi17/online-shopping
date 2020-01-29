import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/Cart/Cart.action';

import {ReactComponent as ShopingIcon} from '../../Assets/shopping-bag.svg';

import './Cart-icon.scss';
import { selectCartItemsCount } from '../../redux/Cart/Cart.selectors';


const CartIcon = ({toggleCartHidden , itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


const mapStateToProps = (State) => ({
    itemCount : selectCartItemsCount(State)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);