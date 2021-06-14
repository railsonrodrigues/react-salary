import React, {createContext, useEffect, useState} from 'react';

const Context = createContext();

function AuthProvider ({children}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    localStorage.setItem('token', 'abc123')
    setAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setAuthenticated(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(token) {
      setAuthenticated(true)
    }

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <h1>LOADING...</h1>
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  )
}

export { AuthProvider, Context };