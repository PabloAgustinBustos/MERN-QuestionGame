import React from 'react'
import s from "./styles/Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.left}>
        <h2>0/10</h2>
      </div>
      
      <div className={s.center}>
        <h1 className={s.question}>¿Cuál es la respuesta?</h1>
      </div>

      <div className={s.right}>
        <h1 className={s.score}>Score: 00</h1>
      </div>
    </header>
  )
}

export default Header
