require('dotenv').config();
const express = require("express")
const booksRoute = require('./routes/book')
const usersRoute = require('./routes/user')
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB......')
}).catch((err) => {
    console.log('not connected',err.message)
})
app.use(bodyparser.urlencoded({ extended :false}))
app.use(bodyparser.json())
app.use('/books',booksRoute)
app.use('/users',usersRoute)



app.use((req, res, next) => {
    res.status(404).json({
        error:'Bad request'
    })
})

// module.exports = app
app.listen(8080, function () {
    console.log('listening on port')
  })