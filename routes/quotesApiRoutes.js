// quotes-api-routes.js - this file offers a routes for displaying quotes from the quotes table in the database

// Dependencies

// Requiring our model
var quotes = require("../models/quotes_db");

// Routes

module.exports = function (app) {
    // List all quotes in database
    app.get("/api/quotes", function (req, res){
        quotes.findAll({}).then(function(result) {
            return res.json(result);
        })
    })
    // Get one random quote
    app.get("/api/randomquote", function (req, res){
        quotes.findOne({order: 'random()'}).then(function(result) {
            return res.json(result);
        })
    })

}

