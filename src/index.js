import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch,  } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <App  path="/members" component={App}/>
    </Switch>
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
