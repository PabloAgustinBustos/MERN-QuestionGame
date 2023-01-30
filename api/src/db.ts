import {connect} from "mongoose"

export default async function connectMongo(){
  let db_user = process.env.DB_USER
  let db_pass = process.env.DB_PASS
  let db_name = process.env.DB_NAME
  
  let uri = `mongodb+srv://${db_user}:${db_pass}@nodeexpressprojects.xrz8qbb.mongodb.net/${db_name}?retryWrites=true&w=majority`
  
  let mongoose = await connect(uri)
  mongoose.pluralize(null)
}