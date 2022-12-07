import mongoose from "mongoose";
//import Exercise from "./exerciseModel";
//const {ObjectId}=mongoose.Schema
const workoutSchema = mongoose.Schema({
    name:{type:String, required:true},
    exercises: [{
        type:mongoose.Schema.ObjectId,
        ref: 'Exercise',
        required:true
    }],

},
{
    minimize: false, //получать все поля, даже если они пустые
    timestamps:true
})

const Workout=mongoose.model('Workout',workoutSchema)
export default Workout