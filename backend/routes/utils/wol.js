const router = require("express").Router();
const ping = require('ping')
const wol = require("node-wol");
require("dotenv").config();

router.get("/", (req, res) => {
    wol.wake(process.env.DESK_MAC_ADD, {}, (result, err) => {
        if (err) res.status(500).json({ msg: "Failed Wol" });

        res.status(200).json({ success: true, msg: "Success Wol" });
    });
});

router.get('/ping', async (req, res) => {
    const host = [process.env.DESK_IP]
    const result = await ping.promise.probe(host)

    res.status(200).json({ alive: result.alive })
})

module.exports = router;
