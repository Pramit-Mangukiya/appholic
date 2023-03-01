const express = require("express");
const express_session = require("express-session");
const cookie_parser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const body_parser = require("body-parser");
const app = express();
const router = require("./router/router");
const flash = require("connect-flash")
const session = require("express-session");

const port = 3000;

mongoose.connect("mongodb://0.0.0.0:27017/Admin_panel");

app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "/src/views"),
  path.join(__dirname, "/src/modules/dashboard"),
  path.join(__dirname, "/src/modules/auth/views"),
  path.join(__dirname, "/src/modules/auth"),
  path.join(__dirname, "/src/modules/record"),
  path.join(__dirname, "/src/modules/change-password"),
  path.join(__dirname, "/src/modules/app-ads")
]);

app.use(
  session({
    secret: "This is my project",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(port, (req, res) => {
  console.log(`Server running in http://localhost:${port}`);
});
