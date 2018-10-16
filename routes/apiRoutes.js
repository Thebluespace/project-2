var db = require("../models");
var express = require("express");
var router = express.Router();

router.post("/api/newUser", (req,res) => {
  try {
    var data = req.body;
    //orm.newUser(data); // need orm setup
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.get("/api/examples",(req,res) => {
  try {
    var data = orm.getExamples();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = router;