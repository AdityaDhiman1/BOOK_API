const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URL)


// const connectDB =  mongoose.connect(process.env.MONGODB_URL).then(() => {
//     console.log('Connected to MongoDB......')
// }).catch((err) => {
//     console.log('not connected',err.message)
// })
 
const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB......')
    }).catch((error) => {
        console.log('not connected',error.message)
    })
}
module.exports = connectDB