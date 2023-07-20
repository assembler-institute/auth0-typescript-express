import express, {Express} from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import {requestRouter} from "./routes/requests.routes";
import errorHandler from "./middlewares/error.middleware";

const app: Express = express()

app.use(cors())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
    limits: {fileSize: 10000000}, // 10MB max file(s) size
    abortOnLimit: true // default: false (if true, files will not be uploaded and an error event will be emitted)
}))
app.use("/api", requestRouter)
app.use(errorHandler)

export default app
