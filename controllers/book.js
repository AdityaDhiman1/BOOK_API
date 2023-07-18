const mongoose = require("mongoose")
const Book = require("../models/book")

const bookgetController = (req, res, next) => {
    Book.find().then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
         console.log("This is controller ",err.message)
     })
 }
 

 const bookpostController = (req, res,next) => {
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
    
}


module.exports = { bookgetController, bookpostController }