//higher order function

module.exports = (role) => {
    return function (req, res, next) {
        console.log(req.decodedJwt.roles)
        if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
            next();
        } else {
            res.status (403).json ({ you: 'dont have permissions!'});
        }
    }
}