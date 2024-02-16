const mongoose = require('mongoose') 

const MONGO_URL = 'mongodb+srv://jitenderkumarmukul:ytZ4DEigkhZECUPM@cluster0.t9uc1ib.mongodb.net/?retryWrites=true&w=majority'

const dbConnect = async ()=> {
      try{
          await mongoose.connect(MONGO_URL) 
          console.log('connect with database successfuly')
      }
      catch(error) {
          console.error(error)
      }
}

module.exports = dbConnect
