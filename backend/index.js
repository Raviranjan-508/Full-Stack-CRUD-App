const express = require('express');

const app = express();

app.use("/" , async(req,res) => {
    res.send("Hello from my side")
})

app.listen(8080, async(req,res) => {
    console.log("DB is connected successfully")
})