var db = require("../models");
var express = require("express");
var router = express.Router();
var authController = require('../controllers/authcontroller.js');
var passport = require("passport");
  router.post("/api/newUser", (req,res) => {
    try {
      var data = req.body;
      //orm.newUser(data); // need orm setup
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });
  
  router.get("/api/examples",(req,res) => {
    try {
      var data = orm.getExamples();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });
    //router.get('/signup', authController.signup);
    router.get('/signin', authController.signin);
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/choosedesign',
        failureRedirect: '/'
    }));
    router.get('/choosedesign', isLoggedIn, authController.choosedesign);
    router.get('/logout', authController.logout);
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    };
    router.post('/signin', (req,res) => {
      console.log(req.body);
      var trigger = false;
      passport.authenticate('local-signin', (err,user,info) => {
        while(trigger === false){
        console.log(info);
        if (err){
          trigger = true;
          console.log(err);
          return res.json({error:err.message});
        } else {
          if(!user){
            return res.send({error:info.message});
          } else {
            req.login(user,err => {
              if (err) {
                console.log(err);
                return res.json({error:err.message});
              }
              console.log("successful sign-in");
              res.json({redirect:"/choosedesign"});
            });
          }
        }
      }
      })(req,res)});
    router.get("/", (req,res) =>{
      res.render("index");
    })
module.exports = router;