
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
require("dotenv").config();


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))


const URI = process.env.MONGODB_URL
mongoose.connect(URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true 

});
app.use('/owner', require('./routes/ownerR'))
app.use('/api', require('./routes/categoryR'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productR'))

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb is connected")
})


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})




