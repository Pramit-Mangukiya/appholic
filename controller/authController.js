const Register = require("../model/model");
const express = require("express");
const app = express();

class Auth {
  login(req, res) {
    const query = req.query;
    let invalid = true;
    if (query.isvalid !== undefined) {
      invalid = query.isvalid;
    }
    res.render("login", { invalid });
  }

  async postLogin(req, res) {
    console.log("req", req.body);
    const body = req.body;
    const email = body.email;
    const password = body.password;
    const useremail = await Register.findOne({ email: email });
    if (useremail.password === password) {
      const session = req.session;
      session["email"] = email;
      res.redirect("/");
    } else {
      res.redirect("/auth/login?isvalid=false");
    }
  }

  logout(req, res){
    try{
      res.render("login");
    }
    catch(error){
      res.status(501).send(error);  
    }
  }
  register(req, res) {
    res.render("register");
  }

  async postRegister(req, res) {
    console.log("req ", req.body);

    const password = req.body.password;
    const retype_password = req.body.retype_password;

    if (password === retype_password) {
      const registerUser = new Register({
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        retype_password: req.body.retype_password,
      });
      const registed = await registerUser.save();
      res.redirect("/");
    } else {
      res.send("Password is not match");
    }
  }
  
  forgot(req, res) {
    res.render("auth/forgot");
  }

  forgotPost(req, res) {
    const session = req.session;
    Register.findOne(req.body).then(async (result) => {
      console.log("result ", result);
      if (result) {
        const otp = genereateOTP();
        await Register.updateOne({ _id: result.id }, { $set: { otp: otp } });
        // send notification....
        res.redirect("/auth/forgot?email=" + result.email);
      } else {
        req.flash("error", "Email is not exist.");
        res.redirect("/auth/forgot");
      }
    });
  }
  // change(req, res) {
  //   res.render("change-password");
  // }

  // changePost(req, res) {
  //   const { currentPassword, newPassword } = req.body;
  //   const userId = req.session.userId;
  
  //   // Find the user in the database
  //   const user = User.findById(userId);
  
  //   // Verify the current password
  //   const isMatch = user.comparePassword(currentPassword);
  //   if (!isMatch) {
  //     return res.status(401).send('Incorrect current password');
  //   }
  
  //   // Update the user's password
  //   user.password = newPassword;
  //   user.save();
  
  //   res.redirect('/dashboard');
  // };

  
  
}

app.get('/logout', (req, res) => {
  // destroy the user's session and redirect to the home page
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/auth/login');
    }
  });
});
module.exports = Auth;
