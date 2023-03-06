import { useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInfo from '../components/PasswordInfo'
import ModeIcon from '../components/ModeIcon'
import { IPasswordMode, IUserDataForRegister, IUserDataForRegisterValidation } from '../types'
import s from "./styles/Register.module.css"

const Register = () => {
  const [data, setData] = useState<IUserDataForRegister>({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [dataActive, setDataActive] = useState<IUserDataForRegisterValidation>({
    nickname: 0,
    email: 0,
    password: 0,
    confirmPassword: 0
  })

  const [showPasswordValidation, setShowPasswordValidation] = useState(false)
  const isNotValid = (field: string) => (dataActive[field] > 0) && (data[field] === "")
  const disabled = () => data.email.length === 0 || data.password.length === 0 || data.nickname.length === 0 || data.confirmPassword?.length === 0

  const [passwordMode, setPasswordMode] = useState<IPasswordMode>("password")

  const passwordInfoControl = useAnimation()
  const navigate = useNavigate()

  function handleChange(e: React.FormEvent<HTMLInputElement>){
    const {id, value} = e.target as HTMLInputElement

    setData(current => ({
      ...current, 
      [id]: value
    }))
  }

  function checkBlur(e: React.FormEvent<HTMLInputElement>){
    const {id} = e.target as HTMLInputElement

    setDataActive({
      ...dataActive,
      [id]: dataActive[id] as number + 1 
    })

    if(id === "password") {
      passwordInfoControl.start({
        opacity: 0
      })
      setTimeout(() => {
        setShowPasswordValidation(false)
      }, 500)
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    
    if(data.password === data.confirmPassword){
      createAccount()
    }else{
      alert("la contraseña no coincide")
    }
  }

  async function createAccount(){
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: data.nickname,
        email: data.email,
        password: data.password
      })
    })

    const response = await res.json()

    console.log(response)
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
      <h1 className={s.title}>Ingrese los datos para crear su cuenta de usuario</h1>
      
      <form className={s.form} onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input 
            onChange={handleChange}
            onBlur={checkBlur}
            value={data.nickname}
            id="nickname"
            type="text" 
            placeholder='Nickname'
          />

          {isNotValid("nickname") && (<span className="validatorMessage">El campo nickname no puede quedar vacío</span>)}
        </div>

        <div className="inputContainer">
          <input 
            onChange={handleChange}
            onBlur={checkBlur}
            value={data.email}
            id="email"
            type="email" 
            placeholder='Email'
          />

          {isNotValid("email") && (<span className="validatorMessage">El campo email no puede quedar vacío</span>)}
        </div>

        <div className="inputContainer">
          <input 
            onChange={handleChange}
            onBlur={checkBlur}
            onFocus={() => setShowPasswordValidation(true)}
            value={data.password}
            id="password"
            type={passwordMode} 
            placeholder='Password'
          ></input>
          <ModeIcon onClick={() => passwordMode==="password" ? setPasswordMode("text") : setPasswordMode("password")} current={passwordMode} className={s.icon}/>
          {isNotValid("password") && (<span className="validatorMessage">Debe escribir una contraseña válida</span>)}
        </div>

        <div className="inputContainer">
          <input 
            onChange={handleChange}
            onBlur={checkBlur}
            value={data.confirmPassword}
            id="confirmPassword"
            type={passwordMode} 
            placeholder='Confirm Password'
          />

          <ModeIcon onClick={() => passwordMode==="password" ? setPasswordMode("text") : setPasswordMode("password")} current={passwordMode} className={s.icon}/>
          {isNotValid("confirmPassword") && (<span className="validatorMessage">Debe escribir una contraseña válida</span>)}
        </div>

        <button disabled={disabled()}>Register</button>

        {showPasswordValidation && <PasswordInfo password={data.password} control={passwordInfoControl}/>}
      </form>

      <div className={`subText ${s.sub}`}>
        ¿Ya está registrado? <Link to="/login">Ingrese sesión</Link>
      </div>
    </div>
  )
}

export default Register