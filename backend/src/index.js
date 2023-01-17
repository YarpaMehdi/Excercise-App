const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require('mongoose')


app.use('/users',userRouter)
app.use('/notes',noteRouter)



mongoose.connect('mongodb+srv://admin:admin@cluster0.0ajhbxy.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    app.listen(5000,() =>{
        console.log("Server Start port no 5000")
    })
})
.catch((err) =>{
    console.log(err)
})

