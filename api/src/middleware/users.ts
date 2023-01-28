import { Request, Response, NextFunction } from "express";
import User from "../models/User";
// import handler from "./handleError";

export function checkData(req: Request, res: Response, next: NextFunction){
  const {
    username,
    email,
    password
  } = req.body

  if(!username || !email || !password) return res.status(400).json({status: "error", message: "faltan datos"})
  
  console.log("se recibió", {username, email, password})

  return next()
}

export async function checkUserExists(req: Request, res: Response, next: NextFunction){
  const {
    email,
    password
  } = req.body

  const user = await User.findOne({
    email,
    password
  })
  
  if(user) return res.status(409).json({status: "error", message: "el usuario ya existe"})

  return next()
}

export function checkPassword(req: Request, res: Response, next: NextFunction){
  const {
    password
  } = req.body

  if(password.length < 5) return res.status(400).json({status: "error", message: "la contraseña debe ser de al menos 5 caracteres"})
  
  console.log("password correcta")

  return next()
}