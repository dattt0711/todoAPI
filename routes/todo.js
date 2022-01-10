const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.route('/todos')
    .get(async (req,res) => {
        const todos = await Todo.find({});
        res.json(todos);
    })
    .post(async (req,res) => {
        const {title, date} = req.body;
        const newTodo = new Todo({title, date});
        await newTodo.save();
        res.json(newTodo)
    })
    .patch(async(req,res)=>{
        const {id, title, date} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, {title, date});
        res.json(updatedTodo);
    })
    .delete(async (req,res)=>{
        const {id} = req.body;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.json(deletedTodo);
    })

module.exports = router;