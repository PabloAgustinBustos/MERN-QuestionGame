import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectMongo from "./db"
import users from "./routes/users"
import question from "./routes/question"
import { getCategories } from "./controllers/Question"


dotenv.config({
  path: `${__dirname}/../.env`
})

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", users)
app.use("/questions", question)
app.get("/categories", getCategories)

try{
  connectMongo()

  let PORT = process.env.PORT || 3001
  app.listen(PORT, () => console.log("Servidor lanzado en puerto " , PORT))
}catch(e){
  console.log("error al conectar", e)
}