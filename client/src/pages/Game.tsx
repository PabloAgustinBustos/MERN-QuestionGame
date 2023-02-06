import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Answers from '../components/Game/Answers'
import Header from '../components/Game/Header'
import ProgressBar from '../components/Game/ProgressBar'
import s from "./styles/Game.module.css"

type Question = {
  answers: string[]
  correctIndex: number
  text: string
}

const Game = () => {
  const [currentId, setCurrentId] = useState(0)
  
  const [question, setQuestion] = useState<Question>({
    answers: ["1", "2", "3", "4"],
    correctIndex: 0,
    text: "¿?"
  })

  const [isDone, setIsDone] = useState(false)
  const [score, setScore] = useState(0)

  const [gen] = useState(getOptions())

  const navigate = useNavigate()

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

  function* getOptions(){
    for(let question of questions){
      yield question
    }
  }
  
  useEffect(() => {
    if(questions.length === currentId) return navigate(`/score/${score}`)

    let {value, done} = gen.next()

    if(value) setQuestion(value)

    if(done !== isDone && done) setIsDone(done)
  }, [currentId])

  return (
    <main className={s.main}>
      <Header amount={questions.length} current={currentId} title={question.text}/>

      <Answers options={question} next={setCurrentId} increment={setScore}/>

      <section className={s.road}>
        <ProgressBar amount={questions.length} current={currentId}/>
      </section>
    </main>
  )
}

export default Game
