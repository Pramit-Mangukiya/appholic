const Details = require("../model/index");

class AppadsController {
  async index(req, res) {
    await Details.find().then((resp) => {
      const getproviders = resp;
      res.render("app-ads", { data: getproviders });
    });
  }
}

module.exports = AppadsController;
