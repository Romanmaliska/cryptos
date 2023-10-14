import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";

connectDB();

const port = process.env.PORT || 5000;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on PORT ${port}`));
