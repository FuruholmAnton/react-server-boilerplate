
const express = require('express');
const app = express();
app.use(express.static('public'));

const {render} = require('./build/server.js');

app.use(render);


app.listen(5000);



/*import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react'
import {renderToString} from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import Layout from '../src/layouts/Base';


const app = new Express();
const server = new Server(app);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.get('*', (req, res, next) => {
  const context = createServerRenderContext();
  const html = renderToString(
      <ServerRouter
        location={req.url}
        context={context}
      >
        {({ location }) => <Layout location={location} />}
      </ServerRouter>
    );

  res.render('index', {html});
});

// start the server
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});*/
