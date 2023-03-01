const Register = require("../model/model");
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
class Auth {
    async change(req, res) {
        await Register.find().then((resp) => {
          const getproviders = resp;
          res.render("change-password", { data: getproviders });
        });
      }

  changePost(req, res) {
    const body = req.body;
    console.log("body",body)
    if (body.password != body.retype_password) {
      res.redirect("/change-password");
    } else {
            Register.updateMany(
            { _id: Register.id },
            { $set: { password: body.password } },
            { $set: { retype_password: body.password } }
          );
          // req.flash("success", "Your password successfully change.");
          res.redirect("/change-password?email=" + body.password);
      };
    }
      }

  
  
module.exports = Auth;
