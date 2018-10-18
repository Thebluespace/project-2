var db = require("../models");
var express = require("express");
var authController = require('../controllers/authcontroller.js');
module.exports = function(app, passport) {
  app.post("/api/newUser", (req,res) => {
    try {
      var data = req.body;
      //orm.newUser(data); // need orm setup
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });
  
  app.get("/api/examples",(req,res) => {
    try {
      var data = orm.getExamples();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });
    //app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/choosedesign',

        failureRedirect: '/'
    }));
    app.get('/choosedesign', isLoggedIn, authController.choosedesign);
    app.get('/logout', authController.logout);
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    };
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/choosedesign',

        failureRedirect: '/signin'
    }));
    app.get("/", (req,res) =>{
      res.render("index");
    })
};