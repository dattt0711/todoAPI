// lib
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser') 

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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', todosRoute)


app.listen(3003, ()=>{
    console.log('listen on port 3000')
})