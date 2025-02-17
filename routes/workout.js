const express = require('express');
const workoutController = require('../controllers/workout');
const { verify } = require('../auth'); // use the auth module

const router = express.Router();

router.post('/', verify, workoutController.addWorkout);
router.get('/', verify, workoutController.getWorkouts);
router.get('/:id', verify, workoutController.getWorkoutById);
router.put('/:id', verify, workoutController.updateWorkout);
router.delete('/:id', verify, workoutController.deleteWorkout);

module.exports = router;
