// Required dependancies
const router = require("express").Router();
const Workout = require("../models/workout.js");

// Get the last workout
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
            }
    }])
    .then((db) => {
        res.json(db);        
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Get the workout within one week
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
            }
    }])
    .sort({id:-1}).limit(7)
    .then(db => {
        res.json(db);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Add a workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        {_id: req.params.id},
        {$push: {exercises: req.body}},
        {new: true}
    )
    .then(db => {
        res.json(db);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Create new workout
router.post("/api/workouts", ({body}, res) => {
    // console.log(body);
    Workout.create(body)
        // console.log("I'm here!")
        .then(db => {
            res.json(db);
            console.log(db);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });

// Export routes
module.exports = router;