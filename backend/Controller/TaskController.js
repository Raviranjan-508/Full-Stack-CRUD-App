const { taskModel } = require("../Model/TaskModel");


const createData = async(req,res) => {
    try {
        const allTask = await taskModel.create(req.body);
        res.status(200).json(allTask)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
} 

const getData = async(req,res) => {
    try {
        const allTask = await taskModel.find();
        res.status(200).json(allTask)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getOneData = async(req,res) => {
    try {
        const {id} = req.body;
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


module.exports = {
    createData,
    getData,
    getOneData
}