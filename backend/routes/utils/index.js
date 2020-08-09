const router = require("express").Router();

router.use("/wol", require("./wol"));

module.exports = router;
