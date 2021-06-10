import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMePage from './pages/AboutMe/AboutMe';
import AccountPage from './pages/Account/Account';
import LoginPage from './pages/Login/Login';
import PublicPage from './pages/PublicPage/PublicPage';
import HomePage from './pages/Home/Home.jsx';
import NotFound404Page from './pages/NotFound404/NotFound404';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={PublicPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/account' component={AccountPage} />
        <Route path='/home' component={HomePage} />
        <Route path='/about-me' component={AboutMePage} />
        <Route path='*' component={NotFound404Page} />
      </Switch>
    </Router>
  )
}

export { Routes };