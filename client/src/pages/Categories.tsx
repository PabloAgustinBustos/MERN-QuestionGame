import React from 'react'
import CategoriesList from '../components/CategoriesList'
import s from "./styles/Categories.module.css"

const Categories = () => {
  
  return (
    <div className={s.main}>
      <h1 className={s.title}>Elija una categoría de preguntas para empezar a jugar</h1>
      
      <CategoriesList className={s.list}/>

      <button className={`close ${s.btn}`}>Cerrar sesión</button>
    </div>
  )
}

export default Categories