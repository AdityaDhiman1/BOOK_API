const express = require('express');
const router = express.Router();
const Book = require('../models/book')
const mongoose = require('mongoose')
const { bookgetController, bookpostController } = require('../controllers/book')


router.get('/', bookgetController)

router.post('/', bookpostController)

module.exports = router