import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Auth user",
  });
});

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`The user with email: ${email} already exists.`);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});

const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Logout user",
  });
});

const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Profile user",
  });
});

const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Update user profile",
  });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
