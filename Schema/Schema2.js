const mongoose= require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const { select } = require('async')


const {Schema}=mongoose
const userSchema1=new Schema({
     name:{
        type:String,
        required:[true,'Please enter your name'],
        minlenght:[5,'Name should be at least 5 characters'],
        maxlength:[30,'Name should be at most 30 characters'],  
        trim:true
        
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
    },
     password:{
        type:String,
        required:[true,'Please enter your password'],
        minlenght:[8,'Password should be at least 8 characters'],
        maxlength:[20,'Password should be at most 20 characters'],
        select:false
     
    }

} ,{timestamps:true})
  
userSchema1.pre('save' ,async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password=await bcrypt.hash(this.password,10)
    return next()
})

 userSchema1.methods={
    jwtToken(){
        return jwt.sign(
            {id:this._id,email:this.email}
            ,process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
 }
//  userSchema1.methods.comparePassword=async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
//  }
  const UserModel  = mongoose.model("users",userSchema1)

  module.exports=UserModel