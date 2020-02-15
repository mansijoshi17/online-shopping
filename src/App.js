import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from '../src/Pages/Shop/Shop.Component';
import Header from '../src/Component/Header/Header.component';
import Contactus from '../src/Pages/ContactUs/Contactus.component';
import SignInAndSignOut from './Pages/Sign-in-Sign-Up/Sign-in-Sing-Up';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Redirect } from 'react-router';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
           <Route path="/shop" component={ShopPage} />
           <Route path="/contact" component={Contactus} />
           <Route exact path="/checkout" component={CheckoutPage} />
           <Route exact path="/signin" render = {() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignOut/>) } />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})


export default  connect(mapStateToProps,mapDispatchToProps)(App);
