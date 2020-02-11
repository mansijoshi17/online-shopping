import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from '../src/Pages/Shop/Shop.Component';
import Header from '../src/Component/Header/Header.component';
import SignInAndSignOut from './Pages/Sign-in-Sign-Up/Sign-in-Sing-Up';
import { auth , createUserProfileDocument} from '../src/Firebase/Firebase';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {setCurrentUser} from './redux/user/user.action';
import { Redirect } from 'react-router';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
            this.props.setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
            });
        })
      }
      setCurrentUser(userAuth);
    });
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
   setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps,mapDispatchToProps)(App);
