import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoute } from "../middlewares/authmiddleware.js";

const router = express.Router();
router.use(protectRoute);

router.get("/token", getStreamToken);

export default router;