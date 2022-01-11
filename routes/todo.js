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
        const todoList = await Todo.find({});
        res.json(todoList);
    })
    .patch(async(req,res)=>{
        const {title, id, date} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, {title, date});
        const todoList = await Todo.find({});
        res.json(todoList);
    })
    .delete(async (req,res)=>{
        const {id} = req.body;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        const todoList = await Todo.find({});
        res.json(todoList);
    })

module.exports = router;