import User from "../../models/userModel.js"
import asyncHandler from 'express-async-handler'//обработчик ошибок express
import { generateToken } from "../../helpers/generateToken.js"
//@desc Auth user
//@route Post /api/users/auth
//@access Public
export const authUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body
    
    const isHaveUser = await User.findOne({email})
    
    if(isHaveUser && (await isHaveUser.matchPassword(password))){
        const token = generateToken(isHaveUser._id)
        res.json({isHaveUser,token:token})
    }
    else{
        res.status(401)
        throw new Error('Пароль не верный')
    }

    
    //create token
})