import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Userlist from './components/Users/Userlist';
class App extends Component {
  render() {
    return (

      <div >
        <Router>
          <Switch>
            <h1> Hello from React</h1>
            <Route exact path="/users" component={Userlist} />

          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
