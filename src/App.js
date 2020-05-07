import React from 'react';
import {Route, Switch, Redirect} from "react-router";
import {connect} from "react-redux";

import './App.css';
import Signup from "./container/signup/Signup";
import Login from "./container/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Dashboard from "./container/dashboard/Dashboard";
import News from "./container/news/News";

import Notification from "./components/notification/Notification";


const App = props => {
  return (
    <div className="app">
        <Navbar />
        <div className="main-container">		
	        <Switch>
		        <Route path="/signup" component={Signup}></Route>
		        <Route path="/login" component={Login}></Route>
            <Route path="/logout">
              <Redirect to="/" /> 
            </Route>

            <Route path="/dashboard/news-feed" component={News}></Route>
            <Route path="/dashboard">
              {props.token ? <Dashboard />: <Redirect to="/" /> }
            </Route>

		        <Route path="/" exact>
              {props.token ? <Redirect to="/dashboard" /> : <Home />}
            </Route>
	        </Switch>
    	</div>
      <Notification />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.users.token
  }
}

export default connect(mapStateToProps)(App);
