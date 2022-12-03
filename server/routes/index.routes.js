const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Server festival 2022 top top");
});

module.exports = router;
