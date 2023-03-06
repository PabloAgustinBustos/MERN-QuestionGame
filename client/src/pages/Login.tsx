import { useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

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
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("kiuact-token", data.token)
      navigate("/")
    })
  }

  // useEffect(() => {
  //   const token = localStorage.getItem("kiuact-token")
    
  //   if(token){
  //     fetch("http://localhost:3001/users/checkAuth", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": "Bearer "+token
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       if(data.status !== "error") navigate("/")
  //     })
  //   }
  // }, [])

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