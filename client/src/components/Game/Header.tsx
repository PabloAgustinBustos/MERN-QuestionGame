import React from 'react'
import s from "./styles/Header.module.css"

interface IProps{
  amount: number
  current: number
  title: string
}

const Header: React.FC<IProps> = ({amount, current, title}) => {
  const getLevel = () => `${current}/${amount}`

  return (
    <header className={s.header}>
      <div className={s.left}>
        <h2>{getLevel()}</h2>
      </div>
      
      <div className={s.center}>
        <h1 className={s.question}>{title}</h1>
      </div>

      {/* <div className={s.right}>
        <h1 className={s.score}>Score: 00</h1>
      </div> */}
    </header>
  )
}

export default Header
