const User = require("../models/user.js");



module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
  }



module.exports.signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({ username, email });
      let registerUser = await User.register(newUser, password);
      console.log(registerUser);

      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome " + registerUser.username);
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }


module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
  }


module.exports.login = async (req, res) => {
    let { username } = req.body;
    req.flash("success", "Welcome " + username);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }


module.exports.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
  
      req.flash("success", "Logged Out!");
      res.redirect("/listings");
    });
  }