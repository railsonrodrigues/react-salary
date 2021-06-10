import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routes } from './routes';
import { AuthProvider } from './Context/authContext';

export default function App () {

  // const handleAuth = (stateAuth) => {  // Como fazer autenticação
  //   setIsLogged(stateAuth);
  // }  // ONDE USAR useEffect -> didMount, didUnmout, e didUpdate

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}