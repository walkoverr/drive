const mongoose= require("mongoose")

const UserSchema = new mongoose.Schema({
   username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minlength:[3,"username must contain 3 characters long"]
   },
   email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minlength:[13,"Email must contain 13 characters long"]
   },
   password:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minlength:[5,"password must contain 5 characters long"]
   },

})
const user = mongoose.model('user',UserSchema)

module.exports = user;