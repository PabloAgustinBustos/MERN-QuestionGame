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

  return next()
}

export function checkDataBeforeLogin(req: Request, res: Response, next: NextFunction){
  console.log(req.body)
  
  const {
    email,
    password
  } = req.body

  if(!email || !password) return res.status(400).json({status: "error", message: "faltan datos"})

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

  if(user) {
    req.body.userExists = true
  }else{
    req.body.userExists = false
  }

  return next()
}

export function checkPassword(req: Request, res: Response, next: NextFunction){
  const {
    password,
    userExists
  } = req.body

  if(userExists) return res.status(409).json({status: "error", message: "el usuario ya existe"})

  if(password.length < 8) return res.status(400).json({status: "error", message: "la contraseña debe ser de al menos 8 caracteres"})

  return next()
}