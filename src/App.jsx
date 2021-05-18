import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home/Home.jsx';
import AboutMePage from './pages/AboutMe/AboutMe.jsx';
import LoginPage from './pages/Login/Login.jsx';
import AccountPage from './pages/Account/Account.jsx';
import PublicPage from './pages/PublicPage/PublicPage.jsx';
import NotFound404Page from './pages/NotFound404/NotFound404.jsx';

export default function App () {

  // const handleAuth = (stateAuth) => {  // Como fazer autenticação
  //   setIsLogged(stateAuth);
  // }  // ONDE USAR useEffect -> didMount, didUnmout, e didUpdate

  return (
    <Router>
      <Switch>
        <Route path="/" exact> {/*Public*/}
          <PublicPage />
        </Route>

        <Route path="/login"> {/*Public*/}
          <LoginPage />
        </Route>

        <Route path="/account">
          <AccountPage />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>
        
        <Route path="/about-me">
          <AboutMePage />
        </Route>

        <Route path="*"> {/*Public*/}
          <NotFound404Page />
        </Route>
      </Switch>
    </Router>
  )
}