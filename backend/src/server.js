import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { userRoutes } from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRoutes);

app.listen(process.env.PORT || 8000, () => {
    connectToMongoDB();
    console.log(`app listening on port ${process.env.PORT}`);
});

export { app };
