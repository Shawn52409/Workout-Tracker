const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for new workout
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    sets: {
        type: Number,
    },
  }],
});

// Create workout db model with workout schema
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;