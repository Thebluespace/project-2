// Error handling to log errors to database

module.exports = function(user, type, action, message) {
    try {
        var errObj = {
            user: user,
            type: typ,
            action: action,
            message: message,
        }
        orm.insertError(errObj);
        console.log(``)
    } catch (error) {
        console.log(error);
    }
};