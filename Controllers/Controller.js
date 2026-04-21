const userModel = require("../Schema/Schema")
const nodemailer= require('nodemailer')
const ExcelJS=require('exceljs')
const UserModel = require("../Schema/Schema2")
const bcrypt=require('bcrypt')








const contect=async(req,res,next)=>{

    const {name,email,phone,message}=req.body
    console.log(name,email,phone,message)
    if(!name || !email || !phone || !message){
        return res.status(400).json({
            success:false,
            message:'Please enter all fields'
        })
     }
    

try{
    const userinfo= new userModel(req.body)
   const result= await userinfo.save()

   const allUsers=await userModel.find()

   const eamilContent= allUsers
   
   .map(
    (user)=>`Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}, Message: ${user.message}`

   )
    .join('\n')
 
   const workbook= new ExcelJS.Workbook()
   const worksheet=workbook.addWorksheet("Users Data") 

   worksheet.columns=[
    {header:'Name',key:'name',width:20},
    {header:'Email',key:'email',width:20},
    {header:'Phone',key:'phone',width:20},
    {header:'Message',key:'message',width:20}
   ]

   allUsers.forEach((user)=>{
    worksheet.addRow({
        name:user.name,
        email:user.email,
        phone:user.phone,
        message:user.message
    })
   })

   const filePath='./data/dinanathdata.xlsx'
   await workbook.xlsx.writeFile(filePath)

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'shantanunigam786@gmail.com',
            pass:'fllp eyuh rspd fiar'
    }
    
    })

    const mailOptions={
        from:"shantanunigam786@gmail.com",
        to:"nshantanu580@gmail.com",
        subject:"my personal mail",
        text:`${eamilContent}`,  
        attacchments:[
            {
                filename:'dinanathdata.xlsx',
                path:filePath
            }
        ]
    }

    await transporter.sendMail(mailOptions)


    res.status(200).json({
        success:true,
        message:'Email sent successfully',
        data:result
    })


   res.status(200).json({
    success:true,
    message:'Form submitted successfully',
    data:result
   })

}catch(err){
    console.error('Error:', err); // Log the error for debugging

    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            message: 'Email already exists. Please use a different email.',
        });
    }

    // Handle other errors
    return res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
}
}

const signup=async(req,res,next)=>{

    const{name,email,password,confirmPassword}=req.body
    console.log(name,email,password,confirmPassword);
    if(!name||!email||!password||!confirmPassword){
        return res.status(400).json({
            success:false,
            message:'please enter all feilds'
        })
    }
      if(password!==confirmPassword){
       return  res.status(400).json({
            success:false,
            message:'Password and confirm password do not match'
        })
     }
try{
    const userinfo=new UserModel(req.body)
    const result=await userinfo.save()
  
     return res.status(200).json({
        success:true,   
        message:result
    })

}catch(err){
    console.log('error',err)
   if(err.code===11000){
    return res.status(400).json({
        success:false,
        message:'email alredy exist'

    })

   }
   return res.status(500).json({
    success:false,
    message:'internal server err'
   })    
}
}
const login = async(req,res,next)=>{
    const{email,password}=req.body
    
    if(!email || !password){

        return res.status(400).json({
            success:false,
              message:'please fill all fields'
        })
    }


    try{
        const user=await UserModel
        .findOne({email})
        .select('+password')

        if(!user || !(await bcrypt.compare(password
            ,user.password ))){
            return res.status(400).json({
                success:false,
                message:'invalid email or password'
            })
            
            
        }
        const token=user.jwtToken()
        user.password=undefined

        const cookieoption={
            maxAge:20*60*60*1000,
            httpOnly:true
        }

        res.cookie('token',token,cookieoption)
        return res.status(200).json({
            success:true,
            data:user       
        
        })
         
    }catch(err){
      return  res.status(400).json({
        success:false,
        message:err.message
      })
    }


}



module.exports={
     contect
    ,signup
    ,login
}