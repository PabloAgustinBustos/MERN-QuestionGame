import {Request, Response, NextFunction} from "express"
import Questions from "../models/Questions"

export async function checkCategory(req: Request, res: Response, next: NextFunction){
  const {category} = req.params

  console.log("checkeo si existe la categoría", category)
  const document = await Questions.findOne({category})

  if(!document){
    if(req.method === "GET") return res.status(404).json({status: "error", message: "no existe la categoría"})

    console.log("no existe, la voy a crear")

    await Questions.create({category})
  }

  console.log("todo ok con la categoría")
  return next()
}