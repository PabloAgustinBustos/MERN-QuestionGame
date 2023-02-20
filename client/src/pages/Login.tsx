import { useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordInfo from '../components/PasswordInfo'
import { IUserDataForLogin, IUserDataForLoginValidation } from '../types'
import s from "./styles/Register.module.css"

const Login = () => {  
  const [data, setData] = useState<IUserDataForLogin>({
    email: "",
    password: ""
  })

  const [dataActive, setDataActive] = useState<IUserDataForLoginValidation>({
    email: 0,
    password: 0,
  })

  const isNotEmailValid = () => (dataActive.email > 0) && (data.email === "")
  const isNotPasswordValid = () => (dataActive.password > 0) && (data.password === "")
  const disabled = () => data.email.length === 0 || data.password.length === 0

  const passwordInfoControl = useAnimation()

  function recoverPassword(){
    console.log("se recupera contraseña")
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>){
    const {type, value} = e.target as HTMLInputElement

    setData(current => ({
      ...current, 
      [type]: value
    }))
  }

  function checkBlur(e: React.FormEvent<HTMLInputElement>){
    const {type} = e.target as HTMLInputElement

    setDataActive({
      ...dataActive,
      [type]: dataActive[type] as number + 1 
    })
  }

  function login(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    alert("aaa")
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>Inicie sesión</h1>
      
      <form className={s.form} onSubmit={login}>
        <div className="inputContainer">
          <input 
            onChange={handleChange}
            onBlur={checkBlur}
            value={data.email}
            type="email" 
            placeholder='Email'
          />

          {isNotEmailValid() && (<span className="validatorMessage">El campo email no puede quedar vacío</span>)}
        </div>
        
        {/* {showPasswordValidation && <PasswordInfo password={data.password} control={passwordInfoControl}/>} */}
        

        <div className="inputContainer">
          <input 
            onChange={handleChange}
            onBlur={checkBlur}
            value={data.password}
            type="password" 
            placeholder='Contraseña'
          />  

          {isNotPasswordValid() && (<span className="validatorMessage">La contraseña no puede quedar vacía</span>)}
        </div>

        <button disabled={disabled()}>Login</button>

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