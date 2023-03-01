const mongoose = require("mongoose");

const Details = new mongoose.model("Details", {
  account_name: {
    type: String,
  },
  application_name: {
    type: String,
  },
  package: {
    type: String,
  },
  app_open_ads: {
    type: String,
  },
  banner_ads: {
    type: String,
  },
  interstitial_ads: {
    type: String,
  },
  native_ads: {
    type: String,
  },
  rewarded_ads: {
    type: String,
  },
  vpn_key: {
    type: String,
  },
  web_url: {
    type: String,
  },
  priority: {
    type: String,
  },
  privacy_policy: {
    type: String,
  },
  text: {
    type: String,
    required: true
  }
});
module.exports = Details;
