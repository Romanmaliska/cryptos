import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";
import { generateToken } from "../utils/generateToken";
import mongoose, { Schema } from "mongoose";

type UserDocument = mongoose.Document & {
  name: string;
  email: string;
  password: string;
  _id: mongoose.Types.ObjectId;
  matchPasswords: (enteredPassword: string) => Promise<boolean>;
};

// @desc Register a new user
// @route POST /api/users/login
// @access Public

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
});

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: UserDocument | null = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
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

// @desc Logout user
// @route POST /api/users/logout
// @access Public

const logoutUser = asyncHandler(async (_req: Request, res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "User has been logged out.",
  });
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Profile user",
  });
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (_req: Request, res: Response) => {
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
