const { taskModel } = require("../Model/TaskModel");


// Create Data in Database
const createData = async(req,res) => {
    try {
        const allTask = await taskModel.create(req.body);
        res.status(200).json(allTask)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
} 

// Get Data from Database
const getData = async(req,res) => {
    try {
        const allTask = await taskModel.find();
        res.status(200).json(allTask)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get Single data from the database
const getOneData = async(req,res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const task = await taskModel.findById(id);
        if(!task){
            res.status(200).json(`data not found {id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg:error.message })
    }
}

// Delete data from Database
const deleteData = async(req,res) => {
    try {
        const {id} = req.params;
        const task = await taskModel.findByIdAndDelete(id);
        if(!task){
            res.status(200).json(`data not found {id}`)
        }
        res.status(200).json("Task Deleted")
    } catch (error) {
        res.status(500).json({ msg:error.message })
    }
}

// Update data from database
const updateData = async(req,res) => {
    try {
        const {id} = req.params;
        const task = await taskModel.findByIdAndUpdate(  {_id : id} , req.body , {
            new : true,
            runValidators : true
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg:error.message })
    }
}


module.exports = {
    createData,
    getData,
    getOneData,
    deleteData,
    updateData
}