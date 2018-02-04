# Introduction

Razor Live API comes with methods which are needed to perform CRUD operations on the RazorLive Database.
Since the central database is not created yet we will have test data to start using the methods.

# Prerequisites

You need to have mongodb and node installed in order to use the API.

To view the data you can use robomongo (Optional).

To set up the test data follow the Setting-Up-Test-Data guide.

# Methods

Razor Live comes with the following API methods which can be used to interact with the Razor Live database.

Method Name | Description
---- | ---- 
list_all_restaurants | GET method to list all the available restaurants in the database.
save_restaurant | POST method to save a restaurant to the database.
remove_restaurant | DELETE method to delete a restaurant from the database, Takes in the ID of the restaurant from the url.

# Setting-Up-Test-Data

To set up test data.

* Clone the api to your local machine.
* Move the test_data.js file to your robomongo bin directory if you want to view the data in RoboMongo (Optional)
* Run the following command to set up the database with the tables and test data.

        ``` mongoimport -d RazorLive -c restaurants test_data.json ``` 

Have Fun Coding!
