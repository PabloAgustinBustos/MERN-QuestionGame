import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import s from "./App.module.css"
import useAuth from './hooks/useAuth'
import Categories from './pages/Categories'
import Game from './pages/Game'
import Login from './pages/Login'
import Register from './pages/Register'
import Score from './pages/Score'
import SetPhoto from './pages/SetPhoto'

function App() {
  const location = useLocation()
  const isLogged = useAuth()

  const setBackground = () => {
    if(location.pathname === "/"){
      return "bg-categories"
    }else if(location.pathname === "/game"){
      return "bg-game"
    }else if(location.pathname === "/score"){
      return "bg-score"
    }

    return "bg-form"
  }

  return (
    <div className={`
      ${s.app}
      ${setBackground()}
    `}>
      <Routes>
        <Route path='/' element={!isLogged ? <Navigate to="/login" replace/> : <Categories/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/register/set-photo" element={!isLogged ? <Navigate to="/login" replace/> : <SetPhoto/>}/>
        <Route path="/game" element={!isLogged ? <Navigate to="/login" replace/> : <Game/>}/>
        <Route path="/score/:number" element={!isLogged ? <Navigate to="/login" replace/> : <Score/>}/>
      </Routes>
    </div>
  )
}

export default App
