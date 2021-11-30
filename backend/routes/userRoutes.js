import { authUser, getUserProfile, RegisterUsers } from "../controllers/userController.js";
import express from "express";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/").post(RegisterUsers)
export default router;
