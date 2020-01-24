import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from '../src/Pages/Shop/Shop.Component';
import Header from '../src/Component/Header/Header.component';
import SignInAndSignOut from './Pages/Sign-in-Sign-Up/Sign-in-Sing-Up';
import { auth , createUserProfileDocument } from '../src/Firebase/Firebase';


class App extends React.Component {

  constructor()
  {
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
            this.setState({
              currentUser : {
                id : snapShot.id,
                ...snapShot.data()
              }
            });
            console.log(this.state.currentUser);
          
        })
      }
      this.setState({currentUser : userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header  currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
