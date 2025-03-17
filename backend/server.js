import express from 'express'
import cors from 'cors'

import authRouter from './routes/auth.js'


const app = express()
app.use(cors())
app.use('/api/auth', authRouter)// will find register

app.listen(5000, () => {
  console.log("server is running")
})