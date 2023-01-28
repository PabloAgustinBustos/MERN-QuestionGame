import express from "express"
import { createUser } from "../controllers/users"
import { checkData, checkPassword, checkUserExists } from "../middleware/users"

const router = express.Router()

router.post("/", checkData, checkUserExists, checkPassword, createUser)
router.post("/login", checkData, checkUserExists, checkPassword, createUser)

export default router