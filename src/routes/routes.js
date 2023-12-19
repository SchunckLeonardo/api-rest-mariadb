import { Router } from "express";
import userController from "../controllers/UserController.js"
import tokenController from "../controllers/TokenController.js";
import middlewares from "../middlewares/Middlewares.js";
const router = Router()

// Unecessary
router.get("/", userController.index)
router.get("/:id", userController.show)

router.post("/", userController.store)
router.put("/", middlewares.LoginRequired, userController.update)
router.delete("/", middlewares.LoginRequired, userController.delete)

router.post("/auth", tokenController.store)

export default router
