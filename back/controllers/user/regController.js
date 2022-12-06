import User from "../../models/userModel.js"
import asyncHandler from 'express-async-handler'//обработчик ошибок express
import { generateToken } from "../../helpers/generateToken.js"

//@desc register user
//@route POST /api/users
//@access public
export const registerUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body
    
    const isHaveUser = await User.findOne({email})
    
    if(isHaveUser){
        res.status(400)
        throw new Error('Пользователь уже зарегистрирован')
    }

    const user = await User.create({
        email,password
    })
    const token = generateToken(user._id)

    res.json({user,token:token})
})