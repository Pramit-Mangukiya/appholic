const express = require("express");
const dashboardRouter = require("./dashboardRouter");
const authRouter = require("./authrouter");
const recordRouter = require("./recordRouter");
const changeRouter = require("./change-passwordRouter")
const appadsRouter = require("./appadsrouter")
const router = express.Router();

const authVerify = (req, res, next) => {
  const session = req.session;
  if (!session.email) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.use("/auth", authRouter);

router.use("/", authVerify, dashboardRouter);

router.use("/record",authVerify, recordRouter);

router.use("/change-password",authVerify, changeRouter);

router.use("/app-ads",authVerify,appadsRouter)

module.exports = router;
