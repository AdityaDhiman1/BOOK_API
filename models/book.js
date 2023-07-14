const mongoose = require('mongoose');

const booksShcema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    bookname: {
        type: String,
        required: true
    },
    bookprice: {
        type: String,
        required: true
    },
    bookauthor: {
        type: String,
        required: true
    },
    bookdescripiton: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Book', booksShcema);