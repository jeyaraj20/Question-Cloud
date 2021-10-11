var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')
var userRouter = require('./routers/task');
var app = express();
app.use(cors())

var PORT = 8080;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'task-app';

 //mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', userRouter);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
