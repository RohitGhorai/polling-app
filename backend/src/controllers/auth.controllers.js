import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/ApiResponse.js";
import generateTokenAndSetToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
    const { username, fullName, password, confirmPassword, gender } = req.body;

    if (
        [username, fullName, password, confirmPassword, gender].some(
            (field) => field?.trim() === ""
        )
    )
        return res.status(400).json({ error: "All fields are required" });
    // check username is exist or not
    const user = await User.findOne({ username });
    if (user)
        return res.status(400).json({ error: "Username is already exist" });
    // check password match or not, with confirmPassword
    if (password !== confirmPassword)
        return res.status(400).json({ error: "Password does not match" });
    // bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User({
        username,
        fullName,
        password: hashedPassword,
        gender,
    });
    if (newUser) {
        generateTokenAndSetToken(newUser._id, res);
        await newUser.save();

        return res
            .status(201)
            .json(new ApiResponse(200, newUser, "User created successfully"));
    } else
        return res.status(400).json({
            error: "Something went wrong while creating user",
        });
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    if ([username, password].some((field) => field?.trim() === ""))
        return res
            .status(400)
            .json({ error: "username or password required !" });

    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ error: "User not found !" });
    // check password correct or not
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid)
        return res.status(400).json({ error: "Invalid Password" });
    // generate token and set token in cookies
    generateTokenAndSetToken(user._id, res);
    return res.status(200).json(new ApiResponse(200, user, "User logged in"));
};

export const logout = async (_, res) => {
    return res
        .status(200)
        .cookie("jwt_token", "", { maxAge: 0 })
        .json(new ApiResponse(200, {}, "User logged out"));
};
