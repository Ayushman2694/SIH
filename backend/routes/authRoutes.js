import express from "express";
import { register, signIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/signIn", signIn);

export default router;
