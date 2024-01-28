import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import "dotenv/config"
import authRouter from "./routes/authRouter.js"
import connectDatabase from "./configs/db.js"
import contentRouter from "./routes/contentRouter.js"
import multer from "multer"


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(multer().any())
app.use(cors());
app.options('*', cors());

app.use("/auth", authRouter)
app.use("/content", contentRouter)


app.listen(5001, async () => {
    try {
        console.log("Server running on 5001")
        connectDatabase;
        console.log("DB connected")
    } catch (err) {
        console.log("Failed", err)
    }
})