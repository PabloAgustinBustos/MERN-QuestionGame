import { Request, Response } from "express"
import User from "../models/User"

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