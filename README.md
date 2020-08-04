# React event tracker and logger
In your main React script add:
```jsx
import {AppTracker} from './path/to/react-tracker/src/';

const AppConfig = {
  app_data: {
    site: 'Proyect Name',
  }
};

function App(){
    return (
      <AppTracker {...AppConfig}>
        <BrowserRouter basename={'/'}>
          <Switch>
            <Route exact path="/" component={Main}></Route>
          </Switch>
        </BrowserRouter>
      </AppTracker>
    )
}
export defautl App;
```
or
```jsx
import WithAppTracker from './path/to/react-tracker/src/';

const AppConfig = {
  app_data: {
    site: 'Proyect Name',
  }
};

function App(){
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </BrowserRouter>
    )
}
export default WithAppTracker(App, AppConfig);
```
Now have available yet in all your components the object app_data , you can include more data inside the object and have it available inside all others component where include the logger.
# Logger
With this config the console.log messages only will be shown if you have the `NODE_ENV` variable.
Inside your package json in the section scripts add `NODE_ENV=development`: If you run other script add the `NODE_ENV=development`.
```json
  "scripts": {
    "start": "NODE_ENV=development react-scripts start",
    ...
  },
```

Inside the React componenent where you want print messages only include the next config:
```jsx
  import {withLogger} from './path/to/react-tracker/src';
  
  function ExampleComponent(props){
     return (
      <h1> Hello World!</h1>
     )
  }
  
  export default withLogger(ExampleComponent, {loggerData: {page: 'Example Component'}});
```
## Logs Types
After include the Logger inside the component you have available in props `props.log(message ,values ,level_log');` for use it just call the function `log` and pass the arguments.
* message: The message that you want print in the web browser console.
* values: You can print objects or any data type supported by Javascript
* level_log: Exists 3 types `info`, `error`, `warning`, if this value isn´t especified by default takes level_log=`info`
