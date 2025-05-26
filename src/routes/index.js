const express = require('express');
const janjiTemuRouter = require('./janjiTemuRouter');
const authRouter = require('./authRouter');
const router = express.Router();

router.use('/auth', authRouter)
router.use('/janji-temu', janjiTemuRouter)

module.exports = router;