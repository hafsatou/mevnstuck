var mongoose = require('mongoose');

var ObstacleSchema = new mongoose.Schema({
    distance: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Obstacle', ObstacleSchema);