import jwt from "jsonwebtoken"

function create(payload: object): string{
  let secret = process.env.SECRET
  let token = ""

  if(secret) token = jwt.sign({payload}, secret, {expiresIn: "30d"})

  return token
}

export default {
  create
}