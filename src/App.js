import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from '../src/Pages/Shop/Shop.Component';
import Header from '../src/Component/Header/Header.component';
import SignInAndSignOut from './Pages/Sign-in-Sign-Up/Sign-in-Sing-Up';
import { auth , createUserProfileDocument } from '../src/Firebase/Firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import { Redirect } from 'react-router';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
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
           <Route exact path="/signin" render = {() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignOut/>) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps,mapDispatchToProps)(App);
