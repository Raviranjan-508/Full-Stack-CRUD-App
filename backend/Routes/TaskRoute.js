const mongoose = require('mongoose');
const Router = require('express');
const { taskModel } = require('../Model/TaskModel');
const { getData, createData, getOneData } = require('../Controller/TaskController');

const taskRouter = Router();

taskRouter.post("/api/create", createData);

taskRouter.get("/api/create", getData);

taskRouter.get("/api/create/:id" ,getOneData);

module.exports = {
    taskRouter
}
