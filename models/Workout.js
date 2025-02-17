const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    duration: {
        type: Number, // duration in minutes
        required: [true, 'Duration is required']
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String, // e.g., "completed", "in-progress"
        default: "in-progress"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Workout', workoutSchema);
