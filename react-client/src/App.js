import React, { Component } from 'react';
import Auth from './modules/Auth';
import DashBoard from './components/DashBoard';
import MonsterList from './components/MonsterList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: Auth.isUserAuthenticated(),
      isAuthorized: false
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ user: data }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          isAuthorized: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          isAuthorized: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      }
    })
      .then(res => {
        Auth.deauthenticateToken();
        this.setState({
          auth: Auth.isUserAuthenticated()
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/login">Login</Link> |
          <Link to="/register">Register</Link> |
          <Link to="/dashboard">DashBoard</Link> |
          <button onClick={this.handleLogout}>Logout</button>
          <Route exact path="/monsters" component={MonsterList} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route
            exact
            path="/login"
            render={() =>
              this.state.auth ? (
                <Redirect to="/dashboard" />
              ) : (
                <LoginForm handleLoginSubmit={this.handleLoginSubmit} />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={() =>
              this.state.auth ? (
                <Redirect to="/dashboard" />
              ) : (
                <RegisterForm
                  handleRegisterSubmit={this.handleRegisterSubmit}
                />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
