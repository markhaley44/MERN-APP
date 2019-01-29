import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Userlist from './components/Users/Userlist';
import SingleUser from './components/Users/SingleUser';

class App extends Component {
  render() {
    return (

      <div >
        <Router>
          <Switch>
            <h1> Hello from React !!!</h1>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Userlist} />
            <Route exact path="/users/:userId" component={SingleUser} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
