// Libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
// Components
import Navbar from './components/layout/Navbar.jsx';
// import PrivateRoute from './components/layout/PrivateRoute.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import EventDetails from './components/events/EventDetails.jsx';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import CreateEvent from './components/events/CreateEvent.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateEvent} />
          </Switch>
        </div>
      </Router>
    );
  }
}
