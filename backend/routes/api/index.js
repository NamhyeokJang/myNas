const router = require("express").Router();

router.use('/login', require('./login'))

router.get('/', (req, res, next) => {
    res.send('api')
})

module.exports = router;
