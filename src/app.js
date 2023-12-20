import express from 'express';
import { config } from 'dotenv';
import { resolve } from "path"
import "./database/connection.js"
import userRoutes from "./routes/UserRoutes.js"
import tokenRoutes from "./routes/TokenRoutes.js"
import studentRoutes from "./routes/StudentRoutes.js"
import photoRoutes from "./routes/PhotoRoutes.js"
const app = express()
config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/users", userRoutes)
app.use("/token", tokenRoutes)
app.use("/student", studentRoutes)
app.use("/photos", photoRoutes)
app.use(express.static(resolve("uploads")))

export default app
