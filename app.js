// lib
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser') 
const cors = require('cors');
// model
const Todo = require('./models/todo');

//routes
const todosRoute = require('./routes/todo.js');


mongoose.connect('mongodb://127.0.0.1:27017/todo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', ()=>{
    console.log('database connected');
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/', todosRoute)


app.listen(3003, ()=>{
    console.log('listen on port 3000')
})