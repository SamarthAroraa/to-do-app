module.exports.home = function (req, res) {
  res.render("home", {
    title: "My To-Do List",
  });
};
