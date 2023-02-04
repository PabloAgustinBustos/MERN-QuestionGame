import React from 'react'
import s from "./styles/Answers.module.css"

const Answers = () => {
  return (
    <section className={s.answers}>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
    </section>
  )
}

export default Answers
