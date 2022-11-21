const Router = require('express');
const { getData, createData, getOneData, deleteData, updateData } = require('../Controller/TaskController');

const taskRouter = Router();

taskRouter.post("/api/create", createData);

taskRouter.get("/api/tasks", getData);

taskRouter.get("/api/create/:id" , getOneData);

taskRouter.delete("/api/delete/:id", deleteData);

taskRouter.patch("/api/update/:id" , updateData);

module.exports = {
    taskRouter
}
