import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import generateTokenAndSetToken from "../utils/generateToken.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const signup = asyncHandler(async (req, res) => {
    const { username, fullName, password, confirmPassword, gender } = req.body;

    if (
        [username, fullName, password, confirmPassword, gender].some(
            (field) => field?.trim() === ""
        )
    )
        throw new ApiError(400, "All fields are required");
    // check username is exist or not
    const user = await User.findOne({ username });
    if (user) throw new ApiError(400, "Username is already exist");
    // check password match or not, with confirmPassword
    if (password !== confirmPassword)
        throw new ApiError(400, "Password does not match");
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
    } else throw new ApiError(500, "Something went wrong while creating user");
});

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if ([username, password].some((field) => field?.trim() === ""))
        throw new ApiError(400, "username or password required !");

    const user = await User.findOne({ username });

    if (!user) throw new ApiError(404, "User not found !");
    // check password correct or not
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new ApiError(404, "Invalid Password");
    // generate token and set token in cookies
    generateTokenAndSetToken(user._id, res);
    return res.status(200).json(new ApiResponse(200, user, "User logged in"));
});

export const logout = asyncHandler(async (_, res) => {
    return res
        .status(200)
        .cookie("jwt_token", "", { maxAge: 0 })
        .json(new ApiResponse(200, {}, "User logged out"));
});
