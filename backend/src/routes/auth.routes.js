import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";

const authRoutes = new Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

export default authRoutes;
