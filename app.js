const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();


//db
mongoose
    .connect(process.env.MONGO_URL,
        {useNewUrlParser:true}
        )
        .then(()=>console.log('Database Conected'));

        mongoose.connection.on('error',err=>{
        console.log(`DB connection error : ${err.message}`);
        })
        //bring in routes
const postRoutes = require('./routes/post');


//middleware
app.use(morgan('dev'));

app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log('Hello from app.js');
})
