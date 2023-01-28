import express from "express"
import { createUser, login } from "../controllers/users"
import { checkData, checkDataBeforeLogin, checkPassword, checkUserExists } from "../middleware/users"

const router = express.Router()

router.post("/", checkData, checkUserExists, checkPassword, createUser)
router.post("/login", checkDataBeforeLogin, checkUserExists, login)

export default router