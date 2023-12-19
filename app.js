import express from 'express';
import { config } from 'dotenv';
import routes from "./src/routes/routes.js"
const app = express()
config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/", routes)

export default app
