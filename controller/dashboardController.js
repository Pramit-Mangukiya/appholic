const Details = require("../model/index");

class DashboardController {
  async index(req, res) {
    await Details.find().then((resp) => {
      const getproviders = resp;
      res.render("dashboard", { data: getproviders });
    });
  }

  //   delete(req, res) {
  //   const id = req.query.id;
  //   const getdata = Details.findOne({ _id: id });
  //   getdata.then(async (respo) => {
  //     if (respo.profile_image) {
  //       await Details.deleteOne({ _id: id });
  //       res.redirect("/dashboard");
  //     }
  //   });
  // }
  async edit(req, res) {
    const data = await Details.findById(req.query.id);
    res.render("edit", { editdata: data });
  }

  async editpost(req, res) {
    const body = req.body;
    await Details.updateOne({ _id: req.query.id }, { $set: body });
    res.redirect("/admin/provider");
  }
  
 async deleteUpdate() {
    const result = await Details.findByIdAndDelete({active:false});
    console.log(result);
  }
}

module.exports = DashboardController;
