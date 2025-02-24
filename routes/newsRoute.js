const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");

const newsController = require("../controller/newsController");


router.post("/news/add-news", middleware.auth, newsController.add_news);
router.post("/news/images/add", middleware.auth, newsController.add_images);
router.get("/news/get-images", middleware.auth, newsController.get_images);

module.exports = router;
