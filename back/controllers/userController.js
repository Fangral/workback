
//@desc get user profile
//@route GET /api/users/profile
//@access Private
export const getUserProfile = (req,res)=>{
    const user={
        name:'sanya',
        age:24
    }
    res.json(user)
}