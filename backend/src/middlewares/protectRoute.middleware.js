import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt_token;
        if (!token)
            return res.status(401).json({ error: "Unauthorized Access" });
        // decode and verify the token
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decode) return res.status(401).json({ error: "Invalid Token" });

        const user = await User.findById(decode.userId).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protected middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
