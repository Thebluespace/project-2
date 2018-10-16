var db = require("../models");
var express = require("express");
var router = express.Router();
var fs = require("fs");

  // Load index page
  router.get("/",(req,res) => {
    try {
        res.sendFile(__dirname + "/../views/index.html");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });

  router.get("/createCard",(req,res) => {
    try {
      res.sendFile(__dirname + "/../views/card.html");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });

  // Render 404 page for any unmatched routes
  router.get("*", function(req, res) {
    res.render("404");
  });
module.exports = router;
