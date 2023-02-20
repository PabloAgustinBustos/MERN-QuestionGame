import { motion, useAnimation, animationControls, AnimationControls } from 'framer-motion'
import React, { useEffect } from 'react'
import s from "./styles/PasswordInfo.module.css"
import Validator from './Validator'

interface IProps{
  control: AnimationControls,
  password: string
}

const PasswordInfo: React.FC<IProps> = ({control, password}) => {
  useEffect(() => {
    control.start({opacity: 1})
  }, [])

  useEffect(() => {
    console.log(password)
  }, [password])

  let good = "#009988"
  let bad = "#ff2825"

  const almostEight = () => password.length >= 8
  const hasOneCapital = () => /[A-Z]/.test(password)
  const hasOneNumber = () => /[0-9]/.test(password)
  const isNotVoid = () => password.length > 0

  return (
    <motion.div 
      className={s.passwordInfo}
      
      initial={{
        opacity: 0
      }}
      
      animate={control}

      transition={{
        type: "spring",
        duration: .5
      }}
    >
      <Validator validator={almostEight} text="Debe tener al menos 8 caracteres"/>
      <Validator validator={hasOneCapital} text="Debe tener una mayuscula"/>
      <Validator validator={hasOneNumber} text="Debe tener un número"/>
      <Validator validator={isNotVoid} text="No debe estar vacía"/>
    </motion.div>
  )
}

export default PasswordInfo