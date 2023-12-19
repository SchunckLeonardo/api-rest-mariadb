import { Router } from "express";
import userController from "../controllers/UserController.js"
import middlewares from "../middlewares/Middlewares.js";
const router = Router()

// Unecessary
router.get("/", userController.index)
router.get("/:id", userController.show)

// User Routes
router.post("/", userController.store)
router.put("/", middlewares.LoginRequired, userController.update)
router.delete("/", middlewares.LoginRequired, userController.delete)

export default router
