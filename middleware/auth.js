const { User } = require("../models/User");

let auth = (req, res, next) => {
    if (!req.cookies || !req.cookies.x_auth) {
        return res.status(401).json({ isAuth: false, error: "No token in cookies" });
    }
    // retrieve token from cookie
    let token = req.cookies.x_auth;
    // decode token and search user
    User.findByToken(token)
        .then(user => {
            if (!user) return res.json({ isAuth: false, error: true });

            req.token = token;
            req.user = user;
            next();
        })
        .catch(err => {
            res.status(401).json({ isAuth: false, error: true });
        });
}

module.exports = { auth };