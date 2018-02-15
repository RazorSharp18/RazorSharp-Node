'use strict';

var ObjectID = require('mongodb').ObjectID;

var mongoose = require('mongoose'),
  Restaurants = mongoose.model('Restaurants');

  exports.list_all_restaurant_names = function(req, res) {
    Restaurants.find({}, {_id: 0, name: 1}, function(err, restaurant) {
      if (err)
        res.send(err);
      res.json(restaurant);
    });
  };

exports.list_all_restaurants = function(req, res) {
  Restaurants.find({}, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};

exports.get_restaurant_by_name = function(req, res) {
  Restaurants.findOne({name: req.params.name}, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};

exports.save_restaurant = function(req, res) {
  var new_restaurant = new Restaurants(req.body);
  new_restaurant.save(function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};

exports.remove_restaurant = function(req, res) {
  Restaurants.remove({
    _id: new ObjectID(req.params.restaurant_id)
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Restaurant successfully deleted' });
  });
};