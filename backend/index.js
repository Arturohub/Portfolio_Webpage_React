const express = require("express")
const cors = require("cors")
const router = require("./routes/router")
const mongoose = require("mongoose")
require("dotenv/config")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSucessStatus: 200
}
app.use(cors(corsOptions))
app.use("/", router)

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}

mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log("DB Connected!"))
.catch((error => console.log(error)))

const port = process.env.PORT
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

