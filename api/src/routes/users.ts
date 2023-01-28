import express from "express"
import { createUser } from "../controllers/users"
import { checkData, checkPassword } from "../middleware/users"

const router = express.Router()

router.post("/", checkData, checkPassword, createUser)

export default router