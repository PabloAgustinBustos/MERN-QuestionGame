import {Request, Response} from "express"
import Questions from "../models/Questions"

export async function createQuestion(req: Request, res: Response){
  const {category} = req.params

  const {
    text,
    answers,
    correctIndex
  } = req.body

  let document = await Questions.findOne({category})

  if(document == null){
    return res.status(404).json({status: "error", message: `no existe la categoría ${category}`})
  }

  const result = await Questions.updateOne({category}, {
    $push: {
      array: {
        text,
        answers,
        correctIndex
      }
    }
  })

  return res.json(result)
}
















































export async function populate(req: Request, res: Response){
  let questions = [
    {
        text:"¿Qué es una variable?" ,
        answers: [ "Una caja que guarda algo","Una estructura que ejecuta código","Un espacio de memoria reservada que guarda un dato","Un número" ] ,
        correctIndex : 2
    },

    {
        text:"¿Por qué HTML no es considerado lenguaje de programación?",
        answers: ["Porque solo sirve para maquetado de documentos" ,  "Porque es un lenguaje de bases de datos" , "Por qué no tiene código" ,  "Si lo es"],
        correctIndex : 0
    },

    {
        text:"¿Qué es un prox en javascript?",
        answers: ["Una clase abstracta sin definición de métodos" , "Un objeto que puede interceptar operaciones set y get de sus atributos" , "Un objeto con capacidad de interceptar otros objetos" , "Un objeto que intercepta un puntero"],
        correctIndex:1
    },

    {
        text:"¿En qué se relacionan java y javascript?",
        answers: ["Son lenguajes estrictos" , "en nada" , "son para desarrollar apps de ios" , "Los creó la misma persona"],
        correctIndex:1
    },

    {
        text:"¿Qué lenguaje usa Unity para los scripts?",
        answers: ["python" , "haskell" , "C#" , "ruby"],
        correctIndex:2
    },

    {
        text:"¿Por qué el operador ternario solo usa expresiones?",
        answers: ["Batman" , "Si puede usar sentencias" , "Por qué tiene bugs con las sentencias" , "Por qué devuelve un resultado"],
        correctIndex:3

    },

    {
        text:"¿Cual es el padre de los lenguajes contemporaneos?",
        answers: ["c" , "python" , "assembly" , "cobol"],
        correctIndex:0
    },

    {
        text:"¿Qué lenguaje acepta herencia multiple?",
        answers: ["java" , "c#" , "python" , "javascript"],
        correctIndex:2
    },

    {
        text:"¿En qué lenguaje está escrito el sistema unix?",
        answers: ["fortran" , "pascal" , "c" , "java"],
        correctIndex:2
    },

    {
        text:"¿Cuál fué un lenguaje par aplicaciones ios?",
        answers: ["java" , "c" , "kotlin" , "objective-c"],
        correctIndex:3
    },
  ]

  const {category} = req.params

  console.log("voy a llenar el documento")

  for(let {text, answers, correctIndex} of questions){
    console.log("actualizando")
    await Questions.updateOne({category}, {
      $push: {
        array: {
          text,
          answers,
          correctIndex
        }
      }
    })

    console.log("listo")
  }
  res.send("actualizado")
}

export async function getQuestions(req: Request, res: Response){
  const {category} = req.params

  const questions = await Questions.findOne({category}, {array: 1, _id: 0})

  res.status(200).json(questions?.array)
}

export async function getCategories(req: Request, res: Response){
  let categories = await Questions.find({},{array: 0, _id: 0, __v:0})

  let result = categories.map(i => i.category)

  res.status(200).json(result)
}