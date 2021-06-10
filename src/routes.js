import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AboutMePage from './pages/AboutMe/AboutMe';
import AccountPage from './pages/Account/Account';
import LoginPage from './pages/Login/Login';
import PublicPage from './pages/PublicPage/PublicPage';
import HomePage from './pages/Home/Home.jsx';
import NotFound404Page from './pages/NotFound404/NotFound404';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => 
    isAuthenticated() ?
      <Component />
      :
      <Redirect to={{ pathname: '/login', state: {from: props.location} }}/>
  } />
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={PublicPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/account' component={AccountPage} />
        <PrivateRoute path='/home' component={HomePage} />
        <PrivateRoute path='/about-me' component={AboutMePage} />
        <Route path='*' component={NotFound404Page} />
      </Switch>
    </Router>
  )
}

export { Routes };