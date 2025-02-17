const Workout = require('../models/Workout');
const express = require('express');
const auth = require('../auth');
const { verifyAdmin, errorHandler } = require ('../auth')

module.exports.addWorkout = (req, res) => {
    const newWorkout = new Workout({
        name: req.body.name,
        duration: req.body.duration,
        user: req.user.id 
    });

    newWorkout.save()
        .then(savedWorkout => res.status(201).send(savedWorkout))
        .catch(err => res.status(500).send({ error: 'Failed to save workout' }));
};

module.exports.getWorkouts = (req, res) => {
    Workout.find({ user: req.user.id })  // Ensure workouts belong to the user
        .then(workouts => res.status(200).send(workouts))
        .catch(err => res.status(500).send({ error: 'Failed to fetch workouts' }));
};

module.exports.getWorkoutById = (req, res) => {
    Workout.findOne({ _id: req.params.id, user: req.user.id }) 
        .then(workout => {
            if (!workout) {
                return res.status(404).send({ error: 'Workout not found' });
            }
            res.status(200).send(workout);
        })
        .catch(err => res.status(500).send({ error: 'Failed to fetch workout' }));
};

module.exports.updateWorkout = (req, res) => {
    const updates = {
        name: req.body.name,
        duration: req.body.duration,
        status: req.body.status
    };

    Workout.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, updates, { new: true })
        .then(updatedWorkout => {
            if (!updatedWorkout) {
                return res.status(404).send({ error: 'Workout not found' });
            }
            res.status(200).send(updatedWorkout);
        })
        .catch(err => res.status(500).send({ error: 'Failed to update workout' }));
};

module.exports.deleteWorkout = (req, res) => {
    Workout.deleteOne({ _id: req.params.id, user: req.user.id })
        .then(result => {
            if (result.deletedCount === 0) {
                return res.status(404).send({ error: 'Workout not found' });
            }
            res.status(200).send({ message: 'Workout deleted successfully' });
        })
        .catch(err => res.status(500).send({ error: 'Failed to delete workout' }));
};
