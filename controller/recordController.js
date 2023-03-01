const Details = require("../model/index")

class RecordController {
    async index(req, res) {
      await Details.find().then((resp) => {
        const getproviders = resp;
        res.render("record", { data: getproviders });
      });
    }

    add(req, res) {
      const invalid = req.query.invalid;
      const changedata = {
        account_name: req.query.account_name,
        application_name: req.query.application_name,
        package: req.query.package,
        app_open_ads: req.query.app_open_ads,
        banner_ads: req.query.banner_ads,
        interstitial_ads: req.query.interstitial_ads,
        native_ads: req.query.native_ads,
        rewarded_ads: req.query.rewarded_ads,
        vpn_key: req.query.vpn_key,
        web_url: req.query.web_url,
        priority: req.query.priority,
      };
      res.render("modules/dashboard",{invalid, changedata});
    }
  
    
  }
  
  module.exports = RecordController;