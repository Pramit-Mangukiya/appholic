const express = require("express");
const router = express.Router();
const AuthController = require("../controller/changepasswordController");

const authController = new AuthController();

router.get("/",authController.change)
router.post("/",authController.changePost)

module.exports = router;