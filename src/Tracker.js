import React from 'react';

export const AppContext = React.createContext();

export function AppTracker({
  app_data,
  children,
  inject
}){
  return(
    <AppContext.Provider value={{app_data, inject}}>
      {children}
    </AppContext.Provider>
  );
}

export default function withAppTracker(Component, {app_data, inject}){
  return function withAppTracker(props){
    return (
      <AppContext.Provider value={{ app_data, inject}}>
        <Component {...props}/>
      </AppContext.Provider>
    );
  };
}
