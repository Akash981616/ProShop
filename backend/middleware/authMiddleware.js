import jwt from "jsonwebtoken";
import User from "../models/userModels.js"


const protect = async(req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split("  ")[1]
      const decoded=jwt.verify(token,process.env.TOKEN_SECRET)
      req.user=await User.findById(decoded.id).select("-password")
        
    
      next();
    } catch (error) {
      if (!token) {
        throw new Error("not authorized,token failed");
      }
    }
  }
  
};
export { protect };
