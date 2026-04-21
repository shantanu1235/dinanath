const mongoose = require('mongoose');

const{Schema}=mongoose

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
        minlenght:[5,'Name should be at least 5 characters'],
        maxlength:[30,'Name should be at most 30 characters'],  
        trim:true
        
    },
    phone:{
        type:String,
        required:[true,'Please enter your phone number'],
        minlenght:[10,'Phone number should be at least 10 digits'],
        maxlength:[10,'Phone number should be at most 10 digits'],

    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        trim:true,
        // validate:[
        //     {
        //         validator:(value)=>{
        //             const re=/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
        //             return value.match(re)
        //         },
        //         message:'Please enter a valid email address'
        //     }
        // ]
    },
    message:{
        type:String,
        required:[true,'Please enter your messege'],
        minlenght:[10,'Messege should be at least 10 characters'],
        maxlength:[1000,'Messege should be at most 1000 characters'],  
        trim:true

    },
   


})

const userModel=mongoose.model('contacts',userSchema)
module.exports=userModel