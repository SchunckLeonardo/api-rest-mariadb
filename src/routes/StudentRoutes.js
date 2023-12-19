import { Router } from "express";
import studentController from "../controllers/StudentController.js";
import middlewares from "../middlewares/Middlewares.js"

const router = Router()

router.get("/", studentController.index)
router.get("/:id", studentController.show)
router.post("/", middlewares.LoginRequired, studentController.store)
router.put("/:id", middlewares.LoginRequired, studentController.update)
router.delete("/:id", middlewares.LoginRequired, studentController.delete)

export default router
