var db = require("../models");
var express = require("express");
var router = express.Router();
var authController = require('../controllers/authcontroller.js');
var passport = require("passport");
  
  router.get("/api/examples",(req,res) => {
    try {
      var data = orm.getExamples();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  });

    router.post('/api/signup', (req,res) => {
    
      passport.authenticate('local-signup', (err,user,info) => {
        console.log(req.body);
          console.log(info);
          if (err){
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
                console.log("account created successfully");
                res.json({redirect:"/choosedesign"});
              });
            }
          }
      })(req,res)
    });



    router.get('/choosedesign', isLoggedIn, authController.choosedesign);
    router.get('/api/logout', authController.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    };
    router.post('/api/signin', (req,res) => {
      console.log(req.body);
      passport.authenticate('local-signin', (err,user,info) => {
        console.log(info);
        if (err){
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
      })(req,res)});

    router.get("/", (req,res) =>{
      res.render("index");
    });

module.exports = router;