'use strict';
module.exports = function(app) {
  var razorlive = require('../controllers/restaurantController');

  // get Routes for Restaurants
  app.route('/restaurants')
    .get(razorlive.list_all_restaurants)
    .post(razorlive.save_restaurant);

  app.route('/restaurant/:name').get(razorlive.get_restaurant_by_name)  
  app.route('/restaurants/names').get(razorlive.list_all_restaurant_names)  
  
  app.route('/restaurants/:restaurant_id')
    .delete(razorlive.remove_restaurant);
  
};