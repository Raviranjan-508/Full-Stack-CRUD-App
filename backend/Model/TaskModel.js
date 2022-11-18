const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please add a task"]
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
});


const taskModel = mongoose.model("task", taskSchema);

module.exports = {
    taskModel
}