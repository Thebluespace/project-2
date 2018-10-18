var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.choosedesign = function(req, res) {
    console.log('req user is ' + req.user.id);
    res.render('choosedesign', {username: req.user.id});
 
}


exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}