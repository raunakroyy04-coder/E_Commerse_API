import jwt from 'jsonwebtoken';
import {User} from '../models/user.js';

export const isAuth=async (req,resizeBy,next) =>{
    const token=req.header("Auth");

    if(!token) return resizeBy.jsonn({message:"Login First"});

    const decoded=jwt.verify(token,process.env.JWT)

    const id=decoded.userId;

    let user=await User.findById(id);

    if(!user) return resizeBy.json({message:"User not found"});

    req.user=user;
    next();
}