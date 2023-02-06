import React from 'react'
import s from "./styles/Answers.module.css"

type Options = {
  answers: string[]
  correctIndex: number
}

interface IProps{
  options: Options
  next: React.Dispatch<React.SetStateAction<number>>
  increment: React.Dispatch<React.SetStateAction<number>>
}

const Answers: React.FC<IProps> = ({options, next, increment}) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    const element = e.target as HTMLElement

    if(element.tagName.toLowerCase() === "button"){
      let {id} = element
      
      increment(prev => Number(id) === Number(options.correctIndex) ? prev+10 : prev)

      next(current => current+1)
    }
  }

  return (
    <section className={s.answers} onClick={handleClick}>
      {options.answers.map((item, index) => (
        <button 
          id={`${index}`} 
          key={item} 
          className={s.option}
        >{item}</button>
      ))}
    </section>
  )
}

export default Answers
