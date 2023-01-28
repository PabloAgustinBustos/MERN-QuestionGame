import { Request, Response } from "express"
import User from "../models/User"

export function createUser(req: Request, res: Response){
  res.send("user created")
}