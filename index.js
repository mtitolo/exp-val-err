'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var morgan = require('morgan');
var helmet = require('helmet');

var app = express();

app.use(morgan("dev"));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json({
  limit: 1024
}));

app.use(helmet.noCache());

// comment out to prevent issue
app.use(expressValidator);

app.get('/health', function (req, res) {
  var object = {
    status: "Server is running"
  };
  res.status(200).json(JSON.stringify(object));
});

app.listen(8080, function () {
  console.log('Started on port 8080');
});

exports.default = app;
