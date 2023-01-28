import mongoose, {model, Schema, SchemaTypes, Document} from "mongoose"
import {v4} from "uuid"

export interface IUser extends Document{
  username: string,
  photo: string,
  email: string,
  password: string,
  score: number
}

const User = new Schema<IUser>({
  _id: {
    type: SchemaTypes.UUID,
    default: () => {
      let id = v4()

      console.log("se crea usuario con id", id)

      return id
    }
  },

  username: {
    type: String,
    required: true
  },

  photo: String,

  email: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => v.split("").includes("@"),
      message: "Ingresaste un email inválido"
    }
  },

  password: {
    type: String,
    required: true,
  },

  score: {
    type: Number,
    default: 0
  }
})

export default model("User", User)