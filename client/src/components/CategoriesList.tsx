import React from 'react'
import CategoryButton from './CategoryButton'

interface IProps{
  className: string
}

const CategoriesList: React.FC<IProps> = ({className}) => {
  
  return (
    <ul className={className}>
      <CategoryButton/>
      <CategoryButton/>
      <CategoryButton/>
      <CategoryButton/>
      <CategoryButton/>
    </ul>
  )
}

export default CategoriesList
