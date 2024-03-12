import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";

const userRoutes = new Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);

export { userRoutes };
