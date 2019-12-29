import React from 'react'
import Avatar from '../image/avatar.png'
import Product1 from '../image/product1.png';


const ProductSelection = ()=>{
  return (
    <div className="product-selection">

      <div className="d-flex justify-content-between">
        <div className="img-avatar">
          <img src={Avatar} alt="User name"/>
        </div>
        <div className="product-total">
          <h6>TOTAL</h6>
          <h4>$300.00</h4>
        </div>
      </div>

      <h6 className="product-name">Black Fur Top Jacket</h6>


      <div className="product-item">
        <div className="imgbox">

        </div>
        <div className="content">
          <div className="imgbox">
            <img src={Product1} alt=""/>
          </div>
          <span>Fur Coats</span>
        </div>
      </div>
    </div>
  )
}

export default ProductSelection