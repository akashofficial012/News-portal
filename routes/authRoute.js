const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const middleware = require("../middleware/middleware");

router.post("/login", authController.login);
router.post('/news/writers',middleware.auth,middleware.role, authController.add_writer)

module.exports = router;
