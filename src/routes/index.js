const express = require('express');
const janjiTemuRouter = require('./janjiTemuRouter');
const router = express.Router();

router.use('/janji-temu', janjiTemuRouter)

module.exports = router;