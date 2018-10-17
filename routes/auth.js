var authController = require('../controllers/authcontroller.js');

var express = require('express');



module.exports = function (router, passport) {

    // //Host public
    // router.use(express.static('public'));

    router.get('/newUserForm', authController.newUserForm);


    router.get('/signin', authController.signin);


    router.post('/newUserForm', passport.authenticate('local-signup', {
        successRedirect: '/choosedesign',

        failureRedirect: '/newUserForm'
    }

    ));
    router.get('/choosedesign', isLoggedIn, authController.choosedesign);

    router.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

    router.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/choosedesign',

        failureRedirect: '/signin'
    }

    ));
}