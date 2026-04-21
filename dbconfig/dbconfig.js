const mongo=require('mongoose')

const Mongo_URL=process.env.MONGO_URL|| 'mongodb://localhost:27017/'

const databaseconnect=()=>{
    
    mongo
    .connect(Mongo_URL)
    .then((conn)=>console.log(`MongoDB connected with server: ${conn.connection.host}`))
    .catch((err)=>console.log(`MongoDB connection failed: ${err}`))

}

module.exports=databaseconnect