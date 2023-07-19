import express, {Express} from "express"
import cors from "cors"
import {requestRouter} from "./routes/requests.routes";
import errorHandler from "./middlewares/error.middleware";

const app: Express = express()

app.use(cors())
app.use("/api", requestRouter)
app.use(errorHandler)

export default app
