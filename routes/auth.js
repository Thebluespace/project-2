var authController = require('../controllers/authcontroller.js');

var express = require('express');



module.exports = function (app, passport) {



    app.get('/newUserForm', authController.newUserForm);


    app.get('/signin', authController.signin);


    app.post('/newUserForm', passport.authenticate('local-signup', {
        successRedirect: '/choosedesign',

        failureRedirect: '/newUserForm'
    }

    ));
    app.get('/choosedesign', isLoggedIn, authController.choosedesign);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/choosedesign',

        failureRedirect: '/signin'
    }

    ));
}