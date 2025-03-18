const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");

const newsController = require("../controller/newsController");


router.get('/news/get-all-news', newsController.get_all_news)
router.get('/news/get-recent-news', newsController.get_recent_news)

router.post("/news/add-news", middleware.auth, newsController.add_news);
router.post("/news/images/add", middleware.auth, newsController.add_images);
router.put('/news/update/:news_id', middleware.auth, newsController.update_news)
router.put('/news/status-update/:news_id', middleware.auth, newsController.news_status_update)
router.get("/news/get-images", middleware.auth, newsController.get_images);
router.get('/news/get-dashboard-news', middleware.auth, newsController.get_dashboard_news)
router.get('/news/:news_id', newsController.get_dashboard_single_news)





module.exports = router;
