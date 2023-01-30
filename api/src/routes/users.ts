import express from "express"
import { createUser, login, rankUsers } from "../controllers/users"
import { checkData, checkDataBeforeLogin, checkPassword, checkUserExists } from "../middleware/users"

const router = express.Router()

router.get("/", rankUsers)
router.post("/", checkData, checkUserExists, checkPassword, createUser)
router.post("/login", checkDataBeforeLogin, checkUserExists, login)

export default router