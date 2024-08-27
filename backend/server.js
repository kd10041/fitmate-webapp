// Importing express 
const express = require('express');
// Import dotenv
require('dotenv').config()

// Importing mongoose
const mongoose = require("mongoose")

// Importing routes
const workoutRoutes = require('./routes/workouts')

// Importing CORS
const cors = require('cors');

// Express is Node.js framework to manage server easily 
const app = express();

// Middleware to handle JSON request
app.use(express.json())

// Enable CORS for all requests
app.use(cors()); // Allow all origins

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & listening on Port", process.env.PORT); 
        })
    })
    .catch((error) => {
        console.log(error)
    })
