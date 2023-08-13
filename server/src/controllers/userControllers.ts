import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// set token for Auth user
const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Auth user",
  });
});

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Register user",
  });
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
