import { Router } from "express";
import { userLogin, userSignup } from "../controllers/auth.js";

const authRouter = Router()

authRouter.post("/signup", userSignup)
authRouter.post("/login", userLogin)

export default authRouter
