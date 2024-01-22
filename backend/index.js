
// for env variables
require('dotenv').config();
// express
const express = require('express');
// cors
const cors = require('cors');
// db connection
const connectWithDb = require('./config/mongoose');
// cloudinary for uploading image
const cloudinary = require('cloudinary').v2;

// app
const app = express();

// connect to db
connectWithDb();

// port
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use(cors());

// cloudinary config
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})

// routes
app.use('/',require('./routes/index'));

// start the server
app.listen(PORT,() => console.log(`Server is running on PORT: ${PORT}`));