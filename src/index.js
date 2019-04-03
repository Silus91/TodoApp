import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './components';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




ReactDOM.render(
  <Router>
    <Switch>
      <App  path="/members" component={App}/>
      <TodoList path="/todolist" component={TodoList} />
    </Switch>
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
