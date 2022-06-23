const { COOKIE_NAME, SECRET } = require('../config/config');
const jwt = require('jsonwebtoken')


module.exports = function () {
    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME];
        if (token) {
            jwt.verify(token, SECRET, function (err, decoded) {
                if (err) {
                    res.clearCookie(COOKIE_NAME);
                } else {
                    req.user = decoded; 
                    res.locals.user = decoded; //тук подава юзера, за да има хендълбарс достъп до него без да го подавам навсякъде.
                    res.locals.isAuthenticated = true; 
                }
            })

        }

        next();
    }
}