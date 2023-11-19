import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/userRoutes";

import { errorHandler, notFound } from "./middleware/errorMiddleware";

import connectDB from "./config/db";

connectDB();

const port = process.env.PORT || 5000;
const app: Application = express();
const userApiRoutePath = "/api/users";

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(userApiRoutePath, userRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
