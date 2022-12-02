import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: String,
    password: {
        type : String,
        required: true
    },
    email: {
        type : String,
        required: true
    },
    images:{
        before: String,
        after: String:
    }
},{
    minimize: false, //получать все поля, даже если они пустые
    timestamps:true
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)//сравниваем текущий и введенный пароль
}
userSchema.pre('save', async function (next){//перед сохранением
    if(!this.isModified('password')){//если не измененный пароль идем дальше
        next()
    }
    //иначе снова шифруем
    const salt = await bcrypt.genSalt(10)//генерация хеша
    this.password = await bcrypt.hash(this.password,salt)//хеширование и запись
})

const User=mongoose.model('User',userSchema)
export default User