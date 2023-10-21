import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const authProtector = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token.");
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as jwt.JwtPayload;

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid.");
    }
  }
);

export { authProtector };
