//Importing express 
const express=require('express');
//Import dotenv
require('dotenv').config()

//Importing mongoose
const mongoose=require("mongoose")

//Importing routes
const workoutRoutes=require('./routes/workouts')

//Express is Nodejs frame work to manage serve easily 
const app=express();

//Middleware handle   request 
app.use(express.json())

//Middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

//Routes
app.use('/api/workouts',workoutRoutes);
//Use Postman to test the request

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //Listen for request
    app.listen(process.env.PORT,()=>{
    console.log("Connected to DB & listening to Port",process.env.PORT); 
})
})
.catch((error)=>{
    console.log(error)
})
//Use env variable


