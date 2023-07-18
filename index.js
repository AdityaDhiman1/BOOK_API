require('dotenv').config();
const express = require("express")
const booksRoute = require('./routes/book')
const usersRoute = require('./routes/user')
const app = express()
const bodyparser = require('body-parser')
const connectDB = require('./DB/connection');
const PORT = process.env.PORT || 8080;



app.use(bodyparser.urlencoded({ extended :false}))
app.use(bodyparser.json())
app.use('/books',booksRoute)
app.use('/users',usersRoute)



app.use((req, res, next) => {
    res.status(404).json({
        error:'Bad request'
    })
})


const server = async () => { 
    try {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
        await connectDB(process.env.MONGODB_URL);
    } catch (error) {
        console.error(error.message)
        
    }
}

server();