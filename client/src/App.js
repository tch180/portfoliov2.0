import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
            <Route exact path='/' component={HomePage}/>

              
              
            </Switch>
            </div>
        </Router>
   </div>
    );
  }
}

export default App;
