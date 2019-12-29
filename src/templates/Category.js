import React from 'react'
import FurImage from '../image/fur.png';
import PantImage from '../image/pants.png';
import LeggingsImage from '../image/leggings.png';
import ShoeImage from '../image/shoes.png';
import SkirtImage from '../image/skirts.png';
import BagImage from '../image/bags.png';
import PurseImage from '../image/purse.png';
import CategoryCard from '../components/CategoryCard'


const Category = ()=>{
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col">
        <CategoryCard title="Fur Coats" image={FurImage} background="bg-brown"/>
      </div>
    </div>

    <div className="row">
      <div className="col-6">
        <CategoryCard title="Pants" image={PantImage} background="bg-info"/>
      </div>
      <div className="col-6">
        <CategoryCard title="Skirts" image={SkirtImage} background="bg-pitch"/>
      </div>
      <div className="col-6">
        <CategoryCard title="Bags" image={BagImage} background="bg-orange"/>
      </div>
      <div className="col-6">
        <CategoryCard title="Shoes" image={ShoeImage} background="bg-white"/>
      </div>
      <div className="col-6">
        <CategoryCard title="Leggings" image={LeggingsImage} background="bg-pink"/>
      </div>
    
    
      
      <div className="col-6">
        <CategoryCard title="Purse" image={PurseImage} background="bg-light"/>
      </div>
    </div>
  </div>


  )
}

export default Category;