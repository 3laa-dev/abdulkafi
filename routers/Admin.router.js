const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin.controllers');
router.post('/addAdmin' , controller.addAdmin );
router.post('/login' , controller.login );
module.exports = router;
