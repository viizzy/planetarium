const express = require('express');
const path = require('path');
const app = express();

const applicationRoutes = require('./routes/index.routes');

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(applicationRoutes);

module.exports = app;
