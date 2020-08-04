import React from 'react';

export const AppContext = React.createContext();

export function AppTracker({
  app_data,
  children
}){
  return(
    <AppContext.Provider value={{ app_data }}>
      {children}
    </AppContext.Provider>
  );
}

export default function withAppTracker(Component, { app_data }){
  return function withAppTracker(props){
    return (
      <AppContext.Provider value={{ app_data }}>
        <Component {...props}/>
      </AppContext.Provider>
    );
  };
}
