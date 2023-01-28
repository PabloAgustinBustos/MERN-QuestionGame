import { Request, Response, NextFunction } from "express";
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

export function checkPassword(req: Request, res: Response, next: NextFunction){
  const {
    password
  } = req.body

  if(password.length < 5) return res.status(400).json({status: "error", message: "la contraseña debe ser de al menos 5 caracteres"})
  
  console.log("password correcta")

  return next()
}