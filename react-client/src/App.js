import React, { Component } from 'react';
import Auth from './modules/Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MonsterList from './components/MonsterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: Auth.isUserAuthenticated() };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/monsters" component={MonsterList} />
        </div>
      </Router>
    );
  }
}

export default App;
