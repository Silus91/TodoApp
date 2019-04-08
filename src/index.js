import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './components/todolist';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch,  } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <App  path="/members" component={App}/>
      <TodoList path="/todolist" component={TodoList} />
    </Switch>
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
