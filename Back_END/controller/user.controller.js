const User=require("../model/user.model")
const bcryptjs = require("bcryptjs")

const Signup=async (req,res)=>{
    try {
        const{email,username,password}=req.body;
        req.body.password=await bcryptjs.hash(password,10)
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const newUser=new User(req.body)
        await newUser.save()

        res.status(201).json({message:"User created successfully" ,   user: {
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email,
  },})
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json({ message: "Server error", error })

    }
}

const Signin=async (req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
           if (!user) {
  return res.status(404).json({ message: "User not found" });
}
        const isFound=await bcryptjs.compare(password,user.password)


        if (isFound) {
            return res.status(200).json({message:"Login successfull",
                user:{
                    id:user._id,
                    username:user.username
                }
            })
        } else {
            return res.status(401).json({ message: "Wrong password" });
        }
    } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports={Signup,Signin}