const Post = require("../models/Post");

exports.aboutPage = (req, res) => {
  res.render("about");
};

// exports.homePage =  (req, res) => {
//     res.render("index");
//   };

exports.addPage = (req, res) => {
    res.render("add_post")
};

exports.editPage = async (req, res) => {
    const post = await Post.findOne({
        _id: req.params.id
    })
    res.render("edit", {
        post
    })
};