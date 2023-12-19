import { Router } from "express";
import userController from "../controllers/UserController.js"
import tokenController from "../controllers/TokenController.js";
import middlewares from "../middlewares/Middlewares.js";
const router = Router()

router.get("/", middlewares.LoginRequired, userController.index)
router.post("/", middlewares.LoginRequired, userController.store)
router.get("/:id", middlewares.LoginRequired, userController.show)
router.put("/:id", middlewares.LoginRequired, userController.update)
router.delete("/:id", middlewares.LoginRequired, userController.delete)

router.post("/auth", tokenController.store)

export default router

