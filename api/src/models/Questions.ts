import mongoose, {model, Schema, SchemaTypes, Document} from "mongoose"
import {v4} from "uuid"

interface IQuestion{
  text: string
  answers: string[]
  correctIndex: number
}

interface IQuestions extends Document{
  category: string
  array: IQuestion[]
}

const Questions = new Schema<IQuestions>({
  _id: {
    type: String,
    default: () => v4()
  },

  category: String,
  array: [{
    _id: {
      type: String,
      default: () => v4()
    },
    
    text: String,
    answers: [String],
    correctIndex: Number
  }]
})

export default model("Questions", Questions, "Questions")