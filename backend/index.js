
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectWithDb = require('./config/mongoose');

const app = express();

connectWithDb();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use(cors());

app.use('/',require('./routes/index'));

app.listen(PORT,() => console.log(`Server is running on PORT: ${PORT}`));