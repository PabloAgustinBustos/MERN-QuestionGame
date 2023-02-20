import { Request, Response } from "express"
import jwt from "jsonwebtoken"

import User from "../models/User"
import Token from "../utils/token"

export async function createUser(req: Request, res: Response){
  const {
    username,
    email,
    password
  } = req.body

  // const user = new User({username, email, password})
  const user = await User.create({username, email, password})
  
  // user.save()

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

export async function rankUsers(req: Request, res: Response){
  let users = await User.find({}, {__v: 0, email: 0, password: 0})

  return res.status(200).json(users)
}

export interface IPayload {
  payload: {
    _id: string
    username: string
    email: string
    password: string
  }
}

export async function checkAuth(req: Request, res: Response){
  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith("Bearer")) return res.status(401).json({status: "error", message: "Faltan credenciales"})

  const token = authHeader.split(" ")[1]
  let key = process.env.SECRET

  if(!key) return res.status(500).json({status: "error", message: "Problemas con el servidor"})

  try{
    const {payload} = jwt.verify(token, key) as IPayload
  
    return res.status(200).json(payload)
  }catch(e){
    return res.status(401).json({status: "error", message: "No está autorizado"})
  }
}