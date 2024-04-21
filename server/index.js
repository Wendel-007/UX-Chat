const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const chatRoute = require('./routes/chatRoutes')
const messageRoute = require('./routes/messageRoute')
require('dotenv').config()



const port = process.env.PORT || 3333
const uri = process.env.ATLAS_URI || 3333

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)
app.use("/api/chats", chatRoute)
app.use("/api/messages", messageRoute)

app.listen(port, (req, res) => {
    console.log("Server running on port " + port)
})

mongoose.connect(uri).then(() => console.log("Connection to MongoDB established!"))
    .catch(error => console.log("Connection to MongoDB failed:", error));