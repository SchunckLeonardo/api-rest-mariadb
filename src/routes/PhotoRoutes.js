import { Router } from "express";
import multer from "multer";
import photoController from "../controllers/PhotoController.js";
import multerConfig from "../config/multerConfig.js"

const upload = multer(multerConfig)

const router = Router()

router.post("/", upload.single("photo"), photoController.store)

export default router
