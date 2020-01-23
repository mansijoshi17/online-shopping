import React from 'react';

import './Header.style.scss';
import {Link} from 'react-router-dom';

import {auth} from '../../Firebase/Firebase';
import { ReactComponent as Logo} from '../../Assets/crown.svg';

const Header = ({currentUser}) => (
    <div className="header">
         <Link to="/" className="logo-container">
             <Logo className="logo"/>
         </Link>
         <div className="options">
              <Link className="option" to="/shop">SHOP</Link>
              <Link className="option" to="/contact">CONTACT</Link>
              {
                  currentUser ? 
                  <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                  : 
                  <Link className="option" to="/signin">SIGN IN</Link>
              }
         </div>
    </div>
);
export default Header;