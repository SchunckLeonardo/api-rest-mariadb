import express from 'express';
import { config } from 'dotenv';
import "./src/database/connection.js"
import userRoutes from "./src/routes/UserRoutes.js"
import tokenRoutes from "./src/routes/TokenRoutes.js"
import studentRoutes from "./src/routes/StudentRoutes.js"
const app = express()
config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/users", userRoutes)
app.use("/token", tokenRoutes)
app.use("/student", studentRoutes)

export default app
