const express = require("express");
const authController = require("../../controllers/user.controller");

const router = express();

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;