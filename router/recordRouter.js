const express = require("express");
const router = express.Router();
const RecordController = require("../controller/recordController");

const recordController = new RecordController();

router.get("/", recordController.index);

router.get("/dashboard",recordController.add);

router.post('/save', (req, res) => {
    console.log('test ->',req.body);
});

module.exports = router;