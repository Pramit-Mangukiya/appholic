const express = require("express");
const router = express.Router();
const DashboardController = require("../controller/dashboardController");

const dashboardController = new DashboardController();

router.get("/", dashboardController.index);

router.get("/delete", dashboardController.deleteUpdate);

router.get("/edit",dashboardController.edit);
router.get("/edit",dashboardController.editpost);

module.exports = router;