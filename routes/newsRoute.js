const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");

const newsController = require("../controller/newsController");


router.post("/news/add-news", middleware.auth, newsController.add_news);

module.exports = router;
