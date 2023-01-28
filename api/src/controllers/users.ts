import { Request, Response } from "express"
import User from "../models/User"
import Token from "../utils/token"

export function createUser(req: Request, res: Response){
  const {
    username,
    email,
    password
  } = req.body

  const user = new User({username, email, password})
  
  user.save()

  res.status(201).json({status: "good", message: "usuario creado", user})
}

export async function login(req: Request, res: Response){
  const {
    email,
    password,
    userExists
  } = req.body

  if(!userExists) return res.status(404).json({status: "error", message: "usuario no existe"})

  const user = await User.findOne({email, password}, {username: 1, email: 1, password: 1})
  
  let token = Token.create(user as object)

  return res.status(201).json({status: "good", message: "logeado", token})
}