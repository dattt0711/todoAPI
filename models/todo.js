const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true 
    },
    date: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Todo', todoSchema);