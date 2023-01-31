import React from 'react'
import { Link } from 'react-router-dom'
import s from "./styles/Register.module.css"

const Login = () => {
  // TODO: programar funcionalidad de recuperar contraseña
  function recoverPassword(){
    console.log("se recupera contraseña")
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>Inicie sesión</h1>
      
      <form className={s.form}>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Contraseña'/>

        <button>Login</button>

        <div className={`subText ${s.sub}`}>
          ¿Olvidó su contraseña? <span className={s.link} onClick={recoverPassword}>Entre aquí</span>
        </div>
      </form>

      <div className={`subText ${s.sub}`}>
        ¿No tiene una cuenta? <Link to="/register">Cree una</Link>
      </div>
    </div>
  )
}

export default Login