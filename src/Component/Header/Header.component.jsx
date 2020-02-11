import React from 'react';

import { connect } from 'react-redux';

import { auth } from '../../Firebase/Firebase';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import CartIcon from '../Cart-icon/Cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionsContainer , OptionLink } from './Header.style';


const Header = ({ currentUser, hidden }) => {
    function signOut() {
        auth.signOut();
    }
    return (

        <HeaderContainer>

            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink to="/" onClick={signOut
                        }>SIGN OUT</OptionLink> : <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>

    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);