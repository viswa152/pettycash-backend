//import required packages
const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
//create a app using express
const app = express()
//import and use cors
const cors=require('cors')
app.use(cors())
//use bodyparser
app.use(express.json())
//create a mongodb connection
mongoose.connect(process.env.URI,()=>console.log('mongodb connected'))
//import routes 
const auth=require('./middleware/auth')
const userrouter=require('./routes/userRouter')
const cashrouter=require('./routes/cashRouter')
//use the routes
app.use('/',userrouter)
app.use('/',auth,cashrouter)
//assign the port
const port = process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
