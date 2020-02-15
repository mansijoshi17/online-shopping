import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../Assets/crown.svg';
import CartIcon from '../Cart-icon/Cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.style';
import { signOutStart } from '../../redux/user/user.action';


const Header = ({ currentUser, hidden, signOutStart }) => {

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
                        <OptionLink to="/" onClick={signOutStart
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);