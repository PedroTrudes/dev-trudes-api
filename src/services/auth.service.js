import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerService = async ({email, password}) => {
    const userExists = await User.findOne({email});
    if(userExists){
        throw new Error("Usuario ja existe");    
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        password: hashedPassword
    });

    return user;
};

export const loginService = async ({email, password}) => {
    const user = await User.findOne({email});
    if(!user) throw new Error("Usuario não encontrado");

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Senha invalida");

    const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    );

    return token;
};