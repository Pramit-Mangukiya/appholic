const express = require("express");
const router = express.Router();
const AuthController = require("../controller/authController");

const authController = new AuthController();

router.get("/login", authController.login);
router.post("/login", authController.postLogin);

router.get("/logout",authController.logout)
module.exports = router;
