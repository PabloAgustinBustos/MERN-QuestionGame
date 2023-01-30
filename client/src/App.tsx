import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import s from "./App.module.css"

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path='/' element={<>Buenas</>}/>
        <Route path='/2' element={<>Que tal</>}/>
      </Routes>
    </div>
  )
}

export default App
