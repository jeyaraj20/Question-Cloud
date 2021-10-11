var express = require('express');
const json2csv = require('json2csv').parse;
var Task = require('../models/task');
var mongoose = require('mongoose');

var request = require("request");
var taskRouter = express.Router();

taskRouter
  .route('/tasks')
  .post(function (request, response) {

    var item = new Task(request.body);

    item.save();

    response.status(201).send(item);
  })
  .get(function (request, response) {

    Task.find(function (error, tasks) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(tasks);

      response.json(tasks);
    });
  });


taskRouter
  .route('/tasks/:taskId')
  .get(function (request, response) {

    var taskId = request.params.taskId;

    Task.findOne({ id: taskId }, function (error, task) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(task);

      response.json(task);

    });
  })
  .put(function (request, response) {

    var taskId = request.params.taskId;

    Task.findOne({ id: taskId }, function (error, task) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      if (task) {
        task.name = request.body.name;
        task.email = request.body.email;
        task.gender = request.body.gender;
        task.status = request.body.status;
        task.updatedAt = new Date();
        
        task.save();

        response.json({message:"task data updated successfully"});
        return;
      }

      response.status(404).json({
        message: 'Task with id ' + taskId + ' was not found.'
      });
    });
  })

  .delete(function (request, response) {

    var taskId = request.params.taskId;

    Task.findOne({ id: taskId }, function (error, task) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (task) {
        task.remove(function (error) {

          if (error) {
            response.status(500).send(error);
            return;
          }

          response.status(200).json({
            'message': 'Task with id ' + taskId + ' was removed.'
          });
        });
      } else {
        response.status(404).json({
          message: 'Task with id ' + taskId + ' was not found.'
        });
      }
    });
  });

module.exports = taskRouter;