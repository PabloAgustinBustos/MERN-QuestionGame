import React from 'react'
import s from "./styles/Answers.module.css"

interface IProps{
  next: React.Dispatch<React.SetStateAction<number>>
}

const Answers: React.FC<IProps> = ({next}) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    const element = e.target as HTMLElement

    if(element.tagName.toLowerCase() === "button"){
      next(current => current+1)
    }
  }

  

  return (
    <section className={s.answers} onClick={handleClick}>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
      <button className={s.option}>¿Cuál es la respuesta a esta pregunta tan misteriosa?</button>
    </section>
  )
}

export default Answers
