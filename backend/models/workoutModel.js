
const { model } = require("mongoose")

//Import mongoose
const mongoose=require('mongoose')

const Schema=mongoose.Schema

//Defining a schema 
const workoutSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
}, { timestamps:true })

//Export the model
module.exports=mongoose.model('Workout',workoutSchema)