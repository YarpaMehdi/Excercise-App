const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
app.use(express.json())
app.use(cors())

app.use('/users',userRouter)
app.use('/notes',noteRouter)

app.get('/',(req,res) =>{
    res.send("Excercise API From Yarpa Mehdi")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    app.listen(PORT,() =>{
        console.log("Server Start port no " + PORT)
    })
})
.catch((err) =>{
    console.log(err)
})

