var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Obstacle = require('../models/Obstacle.js');

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
router.post('/', function(req, res, next) {
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