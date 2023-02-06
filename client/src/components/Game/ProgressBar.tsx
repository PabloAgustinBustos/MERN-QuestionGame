import React from 'react'
import s from "./styles/ProgressBar.module.css"

interface IProps{
  amount: number
  current: number
}

const ProgressBar: React.FC<IProps> = ({amount, current}) => {
  const levels = []

  for(let i = 0; i < amount; i++){
    levels.push(
      <div 
        key={i} 
        className={`
          ${s.number}
          ${(current >= i) && s.current}
          ${(current > i) && s.prevNumber}
        `} 
      >{i+1}</div>
    )
  }

  const calculateWidth = () => (current/(amount-1))*100 + "%"

  return (<>
    <div className={s.line}>
      <div 
        style={{
          width: calculateWidth()
        }}
        className={`${s.line2} ${s.color}`}
      ></div>
    </div>
    
    <div className={s.numbers}>
      {levels}
    </div>
    
  </>)
}

export default ProgressBar