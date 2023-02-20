import React from 'react'
import s from "./styles/Validator.module.css"

interface IProps{
  validator: () => boolean
  text: string
}

const Validator: React.FC<IProps> = ({validator, text}) => {

  return (<li className={s.item}>
    {validator() ? (<svg xmlns="http://www.w3.org/2000/svg" className={`${s.check} ${s.goodValidation} icon icon-tabler icon-tabler-check`} width="30" height="30" viewBox="0 0 24 24" strokeWidth={2} stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l5 5l10 -10" />
    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className={`${s.check} ${s.badValidation} icon icon-tabler icon-tabler-x`} width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>)}

    {text}
  </li>)
}

export default Validator