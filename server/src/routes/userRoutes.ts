import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserPassword,
} from "../controllers/userControllers";
import { authProtector } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(authProtector, getUserProfile)
  .put(authProtector, updateUserPassword);

export default router;
