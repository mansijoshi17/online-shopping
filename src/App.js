import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Homepage';
import { Route, Switch } from 'react-router-dom';

const Hats = (props) => {
  console.log(props);
  return (
    <div>Hats</div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
