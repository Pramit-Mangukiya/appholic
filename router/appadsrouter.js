const express = require("express");
const router = express.Router();
const App_adsController = require("../controller/app-adsController");

const appadsController = new App_adsController();

router.get("/", appadsController.index);

module.exports = router;