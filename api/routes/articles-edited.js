const controllers = require("../controllers");
const router = require("express").Router();
// const { auth } = require('../utils');

router.get("/", controllers.articles.get.getall);

router.get("/getone", controllers.articles.get.getone);

router.post("/", controllers.articles.post);

router.put("/:id", controllers.articles.put);

router.delete("/:id", controllers.articles.delete);

module.exports = router;
