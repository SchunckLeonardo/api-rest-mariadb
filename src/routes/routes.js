import {Router} from "express";
import userController from "../controllers/UserController.js"
const router = Router()

router.get("/", userController.index)
router.post("/", userController.store)
router.get("/:id", userController.show)
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)

export default router

