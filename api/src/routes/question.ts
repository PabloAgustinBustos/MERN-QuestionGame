import express from "express"
import { createQuestion, getQuestions, populate } from "../controllers/Question"
import { createUser, login } from "../controllers/users"
import { checkCategory } from "../middleware/questions"
import { checkData, checkDataBeforeLogin, checkPassword, checkUserExists } from "../middleware/users"

const router = express.Router()

router.get("/:category", checkCategory, getQuestions)
router.post("/:category", createQuestion)
router.post("/:category/populate", checkCategory, populate)

export default router