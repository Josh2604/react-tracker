import React from 'react';
import SiteContext from 'antd/lib/config-provider/SizeContext';

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
      <SiteContext.Provider value={{ app_data, inject}}>
        <Component {...props}/>
      </SiteContext.Provider>
    );
  };
}
