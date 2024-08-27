//import express 
const express=require('express');

//import controller
const { 
    createWorkout ,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');


  
const router=express.Router();

//Get all workouts
router.get('/',getWorkouts) 

//Get a single workout
router.get('/:id',getWorkout)

//Post a new workout
router.post('/',createWorkout)

//delete a new workout
router.delete('/:id',deleteWorkout)

//Update a workout
router.patch('/:id',updateWorkout)

//Export the module
module.exports=router