import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {


    const { name, email, password } = req.body

    let user = await User.findOne({ email });
    if (user) return res.json({ message: `User already exist`, success: false });


    const hashPassword = await bcrypt.hash(password, 10);


    user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    res.json({ message: "User Register SuccessFully..!", user, success: true });
}


export const login = async (req, res) => {
    const { email, password } = req.body

    let user = await User.findOne({ email })

    if (!user) return res.json({ message: "user not exist", success: false })
    const validPass = await bcrypt.compare(password, user.password)

    if (!validPass) return res.json({ message: 'Invalid Password', success: false })

        const token=jwt.sign({userId:user._id},process.env.JWT,{
            expiresIn:'1d'
        })
        res.json({message:`Welcome${user.name}`,token,success:true})

}