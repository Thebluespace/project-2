var db = require("../models");
var express = require("express");
var router = express.Router();
var fs = require("fs");

  // Load index page
  router.get("/",(req,res) => {
    try {
      
    } catch (error) {
      
    }
  });

  // Render 404 page for any unmatched routes
  router.get("*", function(req, res) {
    res.render("404");
  });
module.exports = router;
