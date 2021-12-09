const mongoose = require('mongoose')
const Schema = mongoose.Schema
const signUpShema = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    }

});

const User = mongoose.model('registration_tb',signUpShema);
// console.log(User.find())
signUp = (req, res)=>{  
    let {username,email,phone,password} = req.body
    const saveDetails = new User({
        username,
        email,
        phone,
        password
    })
    saveDetails.save();
    res.json({sucess:"successful"})
}
signIn = async (req,res)=>{
    // let {body} = req
    const login = await User.find({
        username:req.body.username,
        password:req.body.password
    })
    if(login.length == 0){
        res.json({success:false})
    }else{
        res.json({success:true})
    }
} 
getUsers = async (req,res)=>{
    let myUser = await User.find();
    // console.log(myUser);
    res.json({response:myUser});
}
getFriendbyID = async (req,res)=>{
    // console.log(req.params.id)
    let getfrnds = await User.findById({_id: req.params.id})
    res.json({res:getfrnds})
}
module.exports = {signUp,signIn,getUsers,getFriendbyID};