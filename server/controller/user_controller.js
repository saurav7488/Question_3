const User = require('../model/model_user')

const getAlluser = async (req,res) =>{
     let user;
     try{
         user = await User.find({},'-password')
     }
     catch(error) {
          console.error(error)
     }
     if(!user){
         return res.status(404).json({msg:'No user found'})
     }
     else{
         return res.status(200).json({user})
     }
}

const addUser = async (req,res) =>{
       const {name,email,age,country,password} = req.body
       let user;
       try{
           user = new User({
               name,email,age,country,password
           })
           user = await user.save() 
       }
       catch(error) {
           console.log(error);
       }
       if(!user) {
            return res.status(404).json({msg:'user is not add successfuly'})
       }
       else{
           return res.status(200).json({user})
       }
}


const updateData = async (req,res) =>{
      let id = req.params.id
      const {name,email,age,country,password} = req.body
      let user;
      try{
         user = await User.findByIdAndUpdate(id,{
            name,email,age,country,password
         })
         await user.save()
      }
      catch(error) {
           console.log(error)
      }

      if(!user) {
           return res.status(404).json({msg:'user update add successfuly'})
      }
      else{
           return res.status(202).json({msg:'User update successfuly'})
      }
}


const deleteUser = async (req,res) =>{
     let id = req.params.id 
     let user;
     try{
         user = await User.findByIdAndDelete(id)
     }
     catch(error) {
          console.log(error)
     }

     if(!user) {
         return res.status(404).json({msg:'user not delete successfuly'})
     }
     else{ 
          return res.status(200).json({msg:'user delete successfuly'})
     }
}



exports.getAlluser = getAlluser
exports.addUser = addUser
exports.updateData = updateData
exports.deleteUser = deleteUser
