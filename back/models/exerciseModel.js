import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    times:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{
    minimize: false, //получать все поля, даже если они пустые
    timestamps:true
})



const Exercise=mongoose.model('Exercise',exerciseSchema)
export default Exercise