const router = require("express").Router();
const fs = require("fs");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./media/images");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.get("/:filename", (req, res, next) => {
  const { filename } = req.params;

  fs.readFile(`./media/images/${filename}`, (err, file) => {
    res.send(file);
  });
});

router.post("/", upload.single("img"), (req, res) => {
  res.send("success");
});

router.get('/', (req, res) => {
  fs.readFile('./Export-0ddcee95-a11d-420a-b907-9ec2ebc2e1e8.md', (err, data) => {
    res.send(data)
  })
})

module.exports = router;
