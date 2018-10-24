var db = require("../models");
var express = require("express");
var router = express.Router();
var authController = require('../controllers/authcontroller.js');
var passport = require("passport");


router.post('/api/signup', (req, res) => {

  passport.authenticate('local-signup', (err, user, info) => {
    console.log(req.body);
    console.log(info);
    if (err) {
      console.log(err);
      return res.json({ error: err.message });
    } else {
      if (!user) {
        return res.send({ error: info.message });
      } else {
        req.login(user, err => {
          if (err) {
            console.log(err);
            return res.json({ error: err.message });
          }
          console.log("account created successfully");
          res.json({ redirect: "/choosedesign" });
        });
      }
    }
  })(req, res)
});

router.get('/choosedesign', isLoggedIn, authController.choosedesign);
router.get('/api/logout', authController.logout);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};
router.post('/api/signin', (req, res) => {
  console.log(req.body);
  passport.authenticate('local-signin', (err, user, info) => {
    console.log(info);
    if (err) {
      console.log(err);
      return res.json({ error: err.message });
    } else {
      if (!user) {
        return res.send({ error: info.message });
      } else {
        req.login(user, err => {
          if (err) {
            console.log(err);
            return res.json({ error: err.message });
          }
          console.log("successful sign-in");
          res.json({ redirect: "/choosedesign" });
        });
      }
    }
  })(req, res)
});

router.get('/', authController.landing);

//Saving designs
router.post('/api/addDesign', (req, res) => {
  console.log("current design html is  " + req.body.currentDesignHTML);
  db.CardInfo.create({
    userId: req.user.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    website: req.body.url,
    quote: req.body.quote,
    bgcolor: req.body.bgcolor
  }).then(function (dbcardInfo) {
    res.json(dbcardInfo);
  });
});

router.get('/savedDesign', isLoggedIn, authController.savedDesign);

// router.get('/api/savedDesign/', (req, res) => {
//   // console.log("getting user's designs");
//   db.CardInfo.findAll({
//     where: {
//       userId: req.user.id
//     }
//   }).then(function (userDesigns) {
//       // console.log(userDesigns);
//       res.send(userDesigns);
//     });
// })

// Get all designs in database
router.get("/api/designs", (req, res) => {
  db.CardInfo.findAll({}).then(function (result) {
    return res.json(result);
  })
})

// // Get all designs for user

router.get("/api/designs/currentuser", (req, res) => {
  try {
    var data = db.CardInfo.findAll({
      where: {
        userId: req.user.id
      }
    }).then(function (data) {
      res.json(data);
    })

  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

// list quotes in database
router.get("/api/quotes", (req, res) => {
  db.Quotes.findAll({}).then(function (result) {
    return res.json(result);
  })
})

router.get('/favicon.ico', (req, res) => res.status(204));
module.exports = router;