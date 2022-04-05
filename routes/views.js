const H = {};

H.index = function (req, res) {
  return res.render("../views/index", {
    page_path: "/",
    page_title: "home",
    html_title: "HOME",
  });
};
H.about = function (req, res) {
  return res.render("../views/about", {
    page_path: "/about",
    page_title: "about",
    html_title: "ABOUT",
  });
};

module.exports = H;
