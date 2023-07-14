const express = require('express');
const router = express.Router();
const Book = require('../models/book')
const mongoose = require('mongoose')


router.get('/', (req, res, next) => {
    Book.find()
    .then((result) => {
        res.status(200).send(result)
    }).catch((error) => { { error } })
    
})

router.post('/', (req, res,next) => {
    const student = ({
        _id: new mongoose.Types.ObjectId,
        bookname: req.body.bookname,
        bookprice: req.body.bookprice,
        bookauthor: req.body.bookauthor,
        bookdescripiton: req.body.bookdescripiton
    })
    
    Book.insertMany([student]).then((result) => {
        res.status(200).json({ newusr : result })
    }).catch((error) => { 
        res.status(500).json({ error : error })
    })
    
})

module.exports = router