import express from 'express'
import cors from 'cors'
import connectToMongoDB from './database/db.js'
import authRouter from './routes/auth.js'



const app = express()
app.use(cors())
app.use(express.json)
app.use('/api/auth', authRouter)// will find register

//start server
app.listen(5000, () => {
  connectToMongoDB()
  console.log("server is running")
})