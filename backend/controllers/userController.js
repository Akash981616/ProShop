import asyncHandler from "express-async-handler";
import generateToken from "../utills/generateTokens.js";
import User from "../models/userModels.js";
//@des Auth  user & get token
// @route POST/api/logIn
//@acess Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.json(401);
    throw new Error("email or password is wrong");
  }
});
//@des Auth  create new user
// @route POST/api/users
//@acess Public
const RegisterUsers = asyncHandler(async (req, res) => {
  const {name,email,password}=req.body
  const userExist = await User.findOne({ email });
  if (userExist){
    res.status(400)
    throw new Error ("user already exist")

  }
  const user=await User.create({
    name,
    email,
    password
  }) 
  if (user) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.json(401);
    throw new Error("user not found");
  }
});
//@des get user profile 
// @route GET/api/users/profile
//@acess Private
const getUserProfile = asyncHandler(async (req, res) => {
  
    const user = await User.findById(req.user._id)
  
   if (user) {
      res.json({
        _id: user._id,
       name: user.name,
        email: user.email,
       isAdmin: user.isAdmin,
     });
    }
   else{
        res.status(404)
        throw new Error("user not found") }
  
});
export { authUser, getUserProfile,RegisterUsers };
