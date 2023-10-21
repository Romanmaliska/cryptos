import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "express";
import userRoutes from "./routes/userRoutes";

import { errorHandler, notFound } from "./middleware/errorMiddleware";

import connectDB from "./config/db";

connectDB();

const port = process.env.PORT || 5000;
const app: Application = express();
const userRoutePath = "/api/users";

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userRoutePath, userRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
