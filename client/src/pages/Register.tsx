import React from 'react'
import { Link } from 'react-router-dom'
import s from "./styles/Register.module.css"

const Register = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Ingrese los datos para crear su cuenta de usuario</h1>
      
      <form className={s.form}>
        <input type="text" placeholder='Nikname'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Contraseña'/>
        <input type="password" placeholder='Confirmar contraseña'/>

        <button>Registrar</button>
      </form>

      <div className={`subText ${s.sub}`}>
        ¿Ya está registrado? <Link to="/login">Ingrese sesión</Link>
      </div>
    </div>
  )
}

export default Register