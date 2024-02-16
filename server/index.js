const express = require('express')
const app = express()
const PORT = 8000
const dbConnect = require('./db/db')
const router = require('./routes/routes')
app.use(express.json())
// ytZ4DEigkhZECUPM
app.use('/user',router)

dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log('server connect succesfuly')
  })
})