import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routes } from './routes';
import { AuthProvider } from './Context/authContext';

export default function App () {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}