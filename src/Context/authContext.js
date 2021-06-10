import React, {createContext} from 'react';

const Context = createContext();

function AuthProvider ({children}) {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
}

export { AuthProvider, Context };