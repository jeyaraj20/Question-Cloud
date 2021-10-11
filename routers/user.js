var express = require('express');
const json2csv = require('json2csv').parse;
var User = require('../models/user');
var mongoose = require('mongoose');

var request = require("request");
var userRouter = express.Router();

userRouter
  .route('/users')
  .post(function (request, response) {

    var item = new User(request.body);

    item.save();

    response.status(201).send(item);
  })
  .get(function (request, response) {

    User.find(function (error, users) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(users);

      response.json(users);
    });
  });


userRouter
  .route('/getSingleUser')
  .post(function (request, response) {

    var userId = request.body.userId;

    User.findOne({ id: userId }, function (error, task) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(task);

      response.json(task);

    });
  })
  .put(function (request, response) {

    var userId = request.params.userId;

    User.findOneAndUpdate({ id: userId },req.data, function (error, task) {

      if (error) {
        response.status(500).send(error);
        return;
      }else{
        response.status(200).json({
          message: 'User with id ' + userId + 'updated successfully'
        });
            }


    });
  })
  userRouter
  .route('/userDelete')
  .post(function (request, response) {

    var userId = request.body.userId;

    User.findOneAndDelete({ id: userId }, function (error, task) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }else{
        response.status(200).json({
          message: 'User with id ' + userId + 'deleted successfully'
        });
      }

    
    });
  });

module.exports = userRouter;