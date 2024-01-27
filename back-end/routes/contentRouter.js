import { Router } from "express";
import { addContent, getContent } from "../controllers/content.js";
import authorization from "../middlewares/authorization.js";

const contentRouter = Router()

contentRouter.post("/add", authorization, addContent)
contentRouter.get("/get", authorization, getContent)

export default contentRouter
