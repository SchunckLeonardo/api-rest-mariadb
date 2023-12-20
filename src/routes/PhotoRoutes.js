import { Router } from "express";
import photoController from "../controllers/PhotoController.js";

const router = Router()

router.post("/", photoController.store)

export default router
