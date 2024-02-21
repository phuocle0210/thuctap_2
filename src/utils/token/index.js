const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.createToken = function(data) {
    return jwt.sign(data, process.env.PRIVATE_KEY)
}

module.exports.verifyToken = function(token) {
    return jwt.verify(token, process.env.PRIVATE_KEY);
}