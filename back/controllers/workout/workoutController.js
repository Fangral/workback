import asyncHandler from "express-async-handler"
import Workout from "../../models/workoutModel.js"
//@desc add new workout
//@route POST /api/workouts
//@access Private
export const addNewWorkout = asyncHandler(async(req,res)=>{
    const {name,exerciseIds}=req.body
    const workout= await Workout.create({
        name,exercises:exerciseIds
    })
   //await workout.populate('exercises')
    res.json(workout)
})