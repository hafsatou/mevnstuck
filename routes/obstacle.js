var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Obstacle = require('../models/Obstacle.js');
var nodemailer = require('nodemailer');
var path = require('path');

var notifierT = require('terminal-notifier');
var notifierN = require('node-notifier');

/*notifierT('message text');
notifierT('message with title', { title: 'Title' });*/

/*notifierN.notify({
  'title': 'My notificationn',
  'message': 'Hello, there!'

});*/

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'obstacles.tracker@gmail.com', // Your email id
    pass: 'Obstacles1' // Your password
  }
});


/* GET ALL Obstacles */
router.get('/', function(req, res, next) {
  Obstacle.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Obstacle BY ID */
router.get('/:id', function(req, res, next) {
  Obstacle.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Obstacle */
/*router.post('/', function(req, res, next) {
  var text = 'The Distance is  \n\n' + req.body.distance;
  var mailOptions = {
    from: 'obstacles.tracker@gmail.com', // sender address
    to: 'hafsa21991@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
  Obstacle.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});*/
router.post('/', function(req, res, next) {
  var inf=req.body.distance
  //var text = 'The Distance is  \n\n' + req.body.distance;
  if (inf<15){
  var mailOptions = {
    from: 'obstacles.tracker@gmail.com', // sender address
    to: 'hafsa21991@gmail.com', // list of receivers
    subject: 'Ostacle detection', // Subject line
    text: 'The Distance is  \n\n' + inf //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
    notifierN.notify({
      'title': 'attention detection',
      'message':  'The Distance is  \n\n' + inf,
      'icon': './img.png',
      'sound': 'ding.mp3'
    });
  }
  Obstacle.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Obstacle */
router.put('/:id', function(req, res, next) {
  Obstacle.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Obstacle */
router.delete('/:id', function(req, res, next) {
  Obstacle.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
