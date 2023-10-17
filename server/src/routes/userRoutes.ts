import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers";
import authProtector from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(authProtector, getUserProfile)
  .put(authProtector, updateUserProfile);

export default router;
