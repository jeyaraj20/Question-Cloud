var express = require('express');
const json2csv = require('json2csv').parse;
var question = require('../models/question');
var mongoose = require('mongoose');

var request = require("request");
var questionRouter = express.Router();

questionRouter
  .route('/questions')
  .post(function (request, response) {

    var item = new question(request.body);

    item.save();

    response.status(201).send(item);
  })
  .get(function (request, response) {

    question.find(function (error, questions) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(questions);

      response.json(questions);
    });
  });


questionRouter
  .route('/getSinglequestion')
  .post(function (request, response) {

    var questionId = request.body.questionId;

    question.findOne({ id: questionId }, function (error, task) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(task);

      response.json(task);

    });
  })
  .put(function (request, response) {

    var questionId = request.params.questionId;

    question.findOneAndUpdate({ id: questionId },req.data, function (error, task) {

      if (error) {
        response.status(500).send(error);
        return;
      }else{
        response.status(200).json({
          message: 'question with id ' + questionId + 'updated successfully'
        });
            }


    });
  })
  questionRouter
  .route('/questionDelete')
  .post(function (request, response) {

    var questionId = request.body.questionId;

    question.findOneAndDelete({ id: questionId }, function (error, task) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }else{
        response.status(200).json({
          message: 'question with id ' + questionId + 'deleted successfully'
        });
      }

    
    });
  });

module.exports = questionRouter;