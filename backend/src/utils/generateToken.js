import jwt from "jsonwebtoken";

const generateTokenAndSetToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_TOKEN_EXPIRY,
    });
    res.cookie("jwt_token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: Number(process.env.COOKIE_EXPIRY),
    });
};

export default generateTokenAndSetToken;
