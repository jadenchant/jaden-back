var express = require('express');
const compression = require('compression')
const helmet = require('helmet');


var app = express();

app.use(helmet)
app.use(compression)


function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

