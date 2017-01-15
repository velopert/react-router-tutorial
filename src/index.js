import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import Post from './containers/Post';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="post" component={Posts}>
        <Route path=":id" component={Post}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
