const router = require("express").Router();

router.use("/video", require("./video"));
router.use("/image", require("./image"));

module.exports = router;
