import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";
import { generateToken } from "../utils/generateToken";
import mongoose, { Schema } from "mongoose";

type Wallet = {
  name: string;
  description: string;
  uuid: string;
  price: string;
  iconUrl: string;
  symbol: string;
  ammount: number;
  purchasedAt: number;
  purchaseDate: Date;
};

type UserDocument = mongoose.Document & {
  name: string;
  email: string;
  password: string;
  deposit: number;
  balance: number;
  wallet: Wallet[];
  _id: Schema.Types.ObjectId;
  matchPasswords: (enteredPassword: string) => Promise<boolean>;
};

// @desc Register a new user
// @route POST /api/v1/users
// @access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`The user with email: ${email} already exists.`);
  }

  await User.create({
    name,
    email,
    password,
  });
});

// @desc Login user & get token
// @route POST /api/v1/users/login
// @access Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
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
// @route POST /api/v1/users/logout
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
// @route GET /api/v1/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = {
    _id: req.user!._id,
    name: req.user!.name,
    email: req.user!.email,
  };

  res.status(200).json({
    user,
  });
});

// @desc Get user wallet
// @route GET /api/v1/users/wallet
// @access Private
const getUserWallet = asyncHandler(async (req: Request, res: Response) => {
  const user = {
    _id: req.user!._id,
    name: req.user!.name,
    email: req.user!.email,
  };

  res.status(200).json({
    user,
  });
});

// @desc Update user profile
// @route PUT /api/v1/users/profile
// @access Private
const updateUserPassword = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?._id) {
    res.status(401);
    throw new Error("Not authorized.");
  }

  if (!req.body.newPassword) {
    res.status(400);
    throw new Error("Please provide a new password.");
  }

  const user: UserDocument | null = await User.findById(req.user!._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found.");
  }

  user.password = req.body.newPassword;

  await user.save();

  res.status(200).json({
    message: "Password updated.",
  });
});

const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?._id) {
    res.status(401);
    throw new Error("Not authorized.");
  }

  const user = await User.findByIdAndDelete(req.user!._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found.");
  }

  res.status(200).json({
    message: "User deleted.",
  });
});

export {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
  getUserProfile,
  getUserWallet,
  updateUserPassword,
};
