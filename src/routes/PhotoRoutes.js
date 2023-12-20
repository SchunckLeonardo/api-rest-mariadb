import { Router } from "express";
import middlewares from "../middlewares/Middlewares.js"
import photoController from "../controllers/PhotoController.js";

const router = Router()

router.post("/", middlewares.LoginRequired, photoController.store)

export default router
