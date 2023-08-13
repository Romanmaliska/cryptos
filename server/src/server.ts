import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes";
import { notFound, errorHandler } from "./middleware/errorMiddleware";

const port = process.env.PORT || 5000;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
