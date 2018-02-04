'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RestaurantSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the restaurant'
  },
  restaurant_type: {
      type: [{
          type: String,
          enum: ['Italian', 'Greek', 'Mediterranean', 'Indian']
      }],
  },
  waiting_time: {
      type: Number,
      default: 1
  },
  Last_Rated: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Restaurants', RestaurantSchema);