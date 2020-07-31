import React from 'react';
import { AppContext } from './Tracker';

export const LoggerContext = React.createContext();

function logger(message='', payload={}, type='info', page=''){
  if (process.env.NODE_ENV === 'development'){
    if(type=== 'info')
      console.log('%cInfo:', 'color: #00A7F7; font-weight: 700;', {message, payload, page});
    if(type==='error')
      console.log('%cError:', 'color: #ff304f; font-weight: 700;', {message, payload, page});
    if (type === 'warning')
      console.log('%cWarning:', 'color: #f3cf7a; font-weight: 700;', {message, payload, page});      
  }
}

function LoggerWrapper({children}){
  return children;
}

function withLogger(LoggerComponent, options={}){
  return function WithLogger(props){
    const loggerData = options.loggerData;
    return (
      <AppContext.Consumer>
        {
          () => {
            return (
              <LoggerContext.Provider value={loggerData}>
                <LoggerWrapper>
                  <LoggerComponent {...props} log={({message='', payload={}, type}) => { logger(message, payload, type, loggerData.page ? loggerData.page: ''); }}/>
                </LoggerWrapper>
              </LoggerContext.Provider>
            );
          }
        }
      </AppContext.Consumer>
    );
  };

}

export default withLogger;