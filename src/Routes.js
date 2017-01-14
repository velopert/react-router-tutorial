import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import Post from './containers/Post';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="post" component={Posts}>
        <Route path=":id" component={Post}/>
      </Route>
    </Route>
  </Router>
)

export default Routes;