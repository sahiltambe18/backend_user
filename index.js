console.log("sahil")
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
dotenv.config() //load environment variable into file

import {UserRouter} from './routes/user.js'

const app = express()
app.use(cors())
app.use(express.json())  //data that we parse from frontend into json format
app.use('/auth',UserRouter)


let PORT = 3000;

if(process.env.PORT){
    PORT = process.env.PORT
}



mongoose.connect("mongodb+srv://sahil:tTrdc84h27pkeDZD@mern-estate.0kbe7wk.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate");
app.listen(PORT, () =>  //it is used to start the server
{
    console.log("server is running");
})