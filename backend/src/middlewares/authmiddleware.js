import jwt from 'jsonwebtoken';
import User from "../models/User.js"

export const protectRoute = async (req, res, next) => {
    try {
        // check for token
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ message: "Unauthorized - No token provided" });
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        //invalid token
        if (!decoded) return res.status(401).json({ message: "Unauthorized - Invalid token" });

        // send all fields except password
        const user = await User.findById(decoded.userId).select("-password")
        // if user is not found
        if (!user) return res.status(401).json({ message: "Unauthorised - user not found" });
        req.user = user;
        next();


    } catch (error) {
        console.log("Error in protectRoute middleware", error);
        res.status(500).json({ message: "Internal Server Error" });

    }
}