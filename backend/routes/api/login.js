const router = require('express').Router()
require('dotenv').config()

router.post('/', (req, res) => {
    const { password } = req.body

    if (password === process.env.PASSWORD) {
        return res.json({ result: 'ok' })
    } else {
        return res.json({ result: 'failed' })
    }
})



module.exports = router