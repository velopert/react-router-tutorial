const express = require('express');
const app = express();
const path = require('path');

// import Routes from '../src/Routes';
// import {renderToString} from 'react-dom/server';
// import {RouterContext, match, createRoutes} from 'react-router';
const Routes = require('../src/Routes');
const React = require('react');
// const routes = createRoutes(Routes());





app.use('/', express.static(path.resolve('../build')));
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve('../build/index.html'));
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});