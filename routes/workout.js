const express = require('express');
const workoutController = require('../controllers/workout');
const { verify } = require('../auth');

const router = express.Router();

router.post('/addWorkout', verify, workoutController.addWorkout);
router.get('/getMyWorkouts', verify, workoutController.getWorkouts);
router.get('/getWorkoutById/:id', verify, workoutController.getWorkoutById);
router.put('/deleteWorkout/:id', verify, workoutController.updateWorkout);
router.delete('/deleteWorkout/:id', verify, workoutController.deleteWorkout);

module.exports = router;
