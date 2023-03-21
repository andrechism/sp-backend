import "@config/dotenv"
import express from "express";
import errorBoundary from "./middlewares/errorBoundary";
import accessControl from "./middlewares/accessControl";
import "express-async-errors"
import { router } from "./routes";

const app = express()

app.use(express.json())

app.use(accessControl)

app.use('/api', router)

app.use(errorBoundary)

export {
    app
}