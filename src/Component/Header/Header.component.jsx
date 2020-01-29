import React from 'react';

import './Header.style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../Firebase/Firebase';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import CartIcon from '../Cart-icon/Cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';


const Header = ({ currentUser, hidden }) => {
    function signOut() {
       auth.signOut();
    }
    return (

        <div className="header">

            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        <Link to="/" className="option" onClick={signOut
                        }>SIGN OUT</Link> : <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>

    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);