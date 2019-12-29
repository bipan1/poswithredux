import React from 'react'


const CategoryCard = ({title,image,background})=>{
  return(
    <div className={'card card-category '+background}>
      <div className="imgbox">
        <img src={image} alt={title}/>
      </div>
      <h4>{title}</h4>
    </div>
  )
}

export default CategoryCard