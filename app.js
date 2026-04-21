const express= require('express')
const authrouter=require('./routes/routes')
const databaseconnect=require('./dbconfig/dbconfig')
const cors=require('cors')
const cookie=require('cookie-parser')





databaseconnect()
const app=express()

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credintcredentials: true,
}))

app.use(express.json())
app.use(cookie())
app.use('/api/auth',authrouter)


app.use('/',(req,res )=>{
    res.status(200).json({
        success:true,
        messege:'API is working'
    })
})


module.exports=app