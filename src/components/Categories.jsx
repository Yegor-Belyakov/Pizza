import React  from "react";


function Categories({ categoryId, onChangeCategory }) {

 

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
  ]

  

  return (
    <div className="categories">
    <ul>
      {
        categories.map((el, i) => <li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? 'active' : ''}>{el}</li>)
      }
      
    </ul>
  </div>
  )
}

export default Categories