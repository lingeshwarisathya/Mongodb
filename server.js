require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRouts=require('./routes/workout')

const app=express()
app.use(express.json())
app.use("/api/workouts",workoutRouts)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{


app.listen(4000,()=>{
   console.log("listening on port",process.env.PORT)
})
})
.catch((error)=>{
   console.log(error)
})


