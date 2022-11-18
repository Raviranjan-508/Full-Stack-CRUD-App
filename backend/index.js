const express = require('express');
const { connection } = require('./config/db');
const { taskModel } = require('./Model/TaskModel');
const { taskRouter } = require('./Routes/TaskRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }))

app.get("/", async (req, res) => {
    res.send("Hello from express")
})

// Create a Task
app.use("/", taskRouter );


// app.put("/api/")

app.listen(8080, async (req, res) => {
    try {
        await connection
        console.log("DB is connected successfully")
    } catch (error) {
        console.log("Feeling some error, while connecting to DB")
    }
    console.log("DB is connected successfully")
})